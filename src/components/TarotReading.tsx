import { type ReactElement } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import type { TarotCard } from '../data/tarotData';

interface TarotReadingProps {
  cards: Array<{
    card: TarotCard;
    isReversed: boolean;
    position: string;
  }>;
  onClose: () => void;
}

const cardVariants: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 }
};

export default function TarotReading({ cards, onClose }: TarotReadingProps): ReactElement {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        className="bg-black/50 backdrop-blur-lg rounded-xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-purple-300 mb-2">Your Reading</h2>
            <p className="text-purple-200/80">The cards have revealed your path...</p>
          </div>

          <div className="space-y-8">
            {cards.map(({ card, isReversed, position }, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 rounded-lg p-6"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <img
                    src={card.image}
                    alt={card.name}
                    className={`w-48 h-80 object-cover rounded-lg ${
                      isReversed ? 'rotate-180' : ''
                    }`}
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-purple-300 mb-2">
                      {position}: {card.name} {isReversed ? '(Reversed)' : ''}
                    </h3>
                    <p className="text-purple-200/90 mb-4">
                      {isReversed ? card.reversedMeaning : card.uprightMeaning}
                    </p>
                    <p className="text-purple-200/70 text-sm">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button
            onClick={onClose}
            className="mx-auto block px-6 py-2 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg text-purple-300 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Close Reading
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}