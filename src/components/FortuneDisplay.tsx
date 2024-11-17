import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Sparkles } from 'lucide-react';

interface FortuneDisplayProps {
  fortune: string;
  previousFortunes: string[];
}

const cardVariants = {
  initial: { 
    opacity: 0,
    y: 20,
    scale: 0.95,
    rotateY: -180
  },
  animate: { 
    opacity: 1,
    y: 0,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 1.2,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.1
    }
  }
};

const sparkleVariants = {
  initial: { scale: 0, rotate: 0 },
  animate: { 
    scale: [0, 1, 0],
    rotate: [0, 180, 360],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};

const glowVariants = {
  initial: { opacity: 0.3, scale: 1 },
  animate: { 
    opacity: [0.3, 0.6, 0.3],
    scale: [1, 1.05, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function FortuneDisplay({ fortune, previousFortunes }: FortuneDisplayProps) {
  const [showHistory, setShowHistory] = useState(false);

  return (
    <div className="space-y-4">
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate="animate"
        className="relative bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-lg p-8 overflow-hidden perspective-1000"
      >
        {/* Animated background effects */}
        <motion.div
          variants={glowVariants}
          className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20"
        />
        
        {/* Sparkle effects */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            variants={sparkleVariants}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            <Sparkles className="w-4 h-4 text-purple-300/40" />
          </motion.div>
        ))}
        
        {/* Fortune text */}
        <motion.div className="relative z-10">
          <motion.p 
            className="text-xl text-center text-purple-100 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0.4
              }
            }}
          >
            <span className="block text-purple-300/80 text-sm mb-2">Your Fortune Reveals...</span>
            <span className="italic">"{fortune}"</span>
          </motion.p>
        </motion.div>
      </motion.div>

      {previousFortunes.length > 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            onClick={() => setShowHistory(!showHistory)}
            className="flex items-center gap-2 text-sm text-purple-300 hover:text-purple-100 transition-colors group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: showHistory ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Clock className="w-4 h-4 group-hover:text-purple-100" />
            </motion.div>
            {showHistory ? 'Hide' : 'View'} Past Fortunes
          </motion.button>

          <AnimatePresence>
            {showHistory && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: 1, 
                  height: 'auto',
                  transition: {
                    duration: 0.5,
                    ease: [0.4, 0, 0.2, 1]
                  }
                }}
                exit={{ 
                  opacity: 0, 
                  height: 0,
                  transition: {
                    duration: 0.3,
                    ease: [0.4, 0, 1, 1]
                  }
                }}
                className="mt-4 space-y-3"
              >
                {previousFortunes.slice(0, -1).reverse().map((prevFortune, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: {
                        duration: 0.4,
                        delay: index * 0.1
                      }
                    }}
                    className="relative group"
                  >
                    <motion.div
                      className="absolute left-0 top-0 w-1 h-full bg-purple-500/30 rounded-full"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    />
                    <p className="text-sm text-purple-300/70 italic pl-4 group-hover:text-purple-200 transition-colors">
                      "{prevFortune}"
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}