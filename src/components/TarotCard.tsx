import { type ReactElement, useState } from 'react';
import { motion } from 'framer-motion';
import { ImageOff } from 'lucide-react';
import type { TarotCard } from '../data/tarotData';

interface TarotCardProps {
  card: TarotCard;
  isRevealed: boolean;
  isReversed: boolean;
  onClick: () => void;
  position?: string;
}

export default function TarotCard({ 
  card, 
  isRevealed, 
  isReversed, 
  onClick, 
  position 
}: TarotCardProps): ReactElement {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      className="relative w-48 h-80 perspective-1000 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
    >
      <motion.div
        className="relative w-full h-full"
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s'
        }}
        animate={{
          rotateY: isRevealed ? 0 : 180,
          rotateZ: isRevealed && isReversed ? 180 : 0
        }}
      >
        {/* Card Front */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(0deg)'
          }}
        >
          <div className="relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-purple-900 to-indigo-900">
            {imageError ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <ImageOff className="w-12 h-12 text-purple-300 mb-2" />
                <h3 className="text-lg font-semibold text-purple-200">{card.name}</h3>
              </div>
            ) : (
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-full object-cover"
                onError={() => setImageError(true)}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-lg font-semibold">{card.name}</h3>
                {position && (
                  <p className="text-sm text-white/80">{position}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Card Back */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600">
              <div className="absolute inset-0 m-2 rounded-lg border-2 border-white/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border-2 border-white/40 rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 border-2 border-white/30 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 border-2 border-white/20 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}