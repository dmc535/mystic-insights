import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, LayoutGrid } from 'lucide-react';
import MysticBackground from '../components/MysticBackground';
import TarotCard from '../components/TarotCard';
import TarotReading from '../components/TarotReading';
import { majorArcana, minorArcana, spreadTypes } from '../data/tarotData';
import type { TarotCard as TarotCardType } from '../data/tarotData';

export default function Tarot() {
  const [selectedSpread, setSelectedSpread] = useState<typeof spreadTypes[0] | null>(null);
  const [question, setQuestion] = useState('');
  const [shuffledCards, setShuffledCards] = useState<TarotCardType[]>([]);
  const [selectedCards, setSelectedCards] = useState<Array<{
    card: TarotCardType;
    isReversed: boolean;
    position: string;
  }>>([]);
  const [revealedCards, setRevealedCards] = useState<number[]>([]);
  const [isReadingComplete, setIsReadingComplete] = useState(false);

  const shuffleCards = useCallback(() => {
    // Combine major arcana with some minor arcana
    const allCards = [
      ...majorArcana,
      ...minorArcana.cups,
      ...minorArcana.wands,
      ...minorArcana.swords,
      ...minorArcana.pentacles
    ];
    const shuffled = [...allCards].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
  }, []);

  const handleSpreadSelect = (spread: typeof spreadTypes[0]) => {
    setSelectedSpread(spread);
    setSelectedCards([]);
    setRevealedCards([]);
    setIsReadingComplete(false);
    shuffleCards();
  };

  const getPositionName = (index: number) => {
    if (!selectedSpread) return '';
    
    if (selectedSpread.name === "Past, Present, Future") {
      return ["Past", "Present", "Future"][index];
    }
    if (selectedSpread.name === "Celtic Cross") {
      return [
        "Present Situation",
        "Challenge",
        "Past Foundation",
        "Recent Past",
        "Potential Outcome",
        "Immediate Future",
        "Your Influence",
        "External Influences",
        "Hopes or Fears",
        "Final Outcome"
      ][index];
    }
    return "Card of the Day";
  };

  const handleCardSelect = (index: number) => {
    if (!selectedSpread || revealedCards.includes(index)) return;

    const newCard = {
      card: shuffledCards[index],
      isReversed: Math.random() > 0.5,
      position: getPositionName(selectedCards.length)
    };

    setSelectedCards(prev => [...prev, newCard]);
    setRevealedCards(prev => [...prev, index]);

    if (selectedCards.length + 1 === selectedSpread.positions) {
      setTimeout(() => setIsReadingComplete(true), 1000);
    }
  };

  const resetReading = () => {
    setSelectedSpread(null);
    setSelectedCards([]);
    setRevealedCards([]);
    setIsReadingComplete(false);
    setQuestion('');
    shuffleCards();
  };

  return (
    <div className="relative min-h-[calc(100vh-4rem)] p-4">
      <MysticBackground />
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-4">
            Tarot Reading
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <Sparkles className="w-6 h-6 text-purple-300" />
            <LayoutGrid className="w-6 h-6 text-pink-300" />
          </div>
          <p className="text-lg text-purple-200/80 max-w-2xl mx-auto">
            Seek guidance through the ancient wisdom of the Tarot. Choose your spread and focus on your question.
          </p>
        </motion.div>

        {!selectedSpread ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {spreadTypes.map((spread, index) => (
              <motion.button
                key={spread.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleSpreadSelect(spread)}
                className="bg-black/30 backdrop-blur-lg border border-white/10 rounded-xl p-6 text-left hover:bg-white/5 transition-colors"
              >
                <h3 className="text-xl font-semibold text-purple-300 mb-2">
                  {spread.name}
                </h3>
                <p className="text-purple-200/70 text-sm">
                  {spread.description}
                </p>
              </motion.button>
            ))}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            {selectedCards.length < selectedSpread.positions && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-8"
              >
                <input
                  type="text"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Enter your question..."
                  className="w-full bg-white/10 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                />
              </motion.div>
            )}

            <div className="flex flex-wrap gap-6 justify-center">
              {shuffledCards.slice(0, selectedSpread.positions).map((card, index) => (
                <TarotCard
                  key={index}
                  card={card}
                  isRevealed={revealedCards.includes(index)}
                  isReversed={selectedCards.find((_, i) => revealedCards[i] === index)?.isReversed || false}
                  onClick={() => handleCardSelect(index)}
                  position={revealedCards.includes(index) ? getPositionName(revealedCards.indexOf(index)) : undefined}
                />
              ))}
            </div>

            <motion.button
              onClick={resetReading}
              className="mt-8 mx-auto block px-6 py-2 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg text-purple-300 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start New Reading
            </motion.button>
          </div>
        )}

        <AnimatePresence>
          {isReadingComplete && (
            <TarotReading
              cards={selectedCards}
              onClose={resetReading}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}