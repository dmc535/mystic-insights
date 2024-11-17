import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Moon, Stars } from 'lucide-react';

export default function MysticHeader() {
  return (
    <>
      <div className="flex items-center justify-center mb-8">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="relative"
        >
          <Stars className="w-12 h-12 text-purple-300" />
        </motion.div>
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [-5, 5, -5]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mx-4"
        >
          <Moon className="w-8 h-8 text-purple-300" />
        </motion.div>
        <motion.div
          animate={{ 
            rotate: [-360, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Sparkles className="w-12 h-12 text-purple-300" />
        </motion.div>
      </div>

      <motion.h1 
        className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300"
        animate={{ 
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ 
          backgroundSize: '200% 200%'
        }}
      >
        Mystic Oracle
      </motion.h1>
    </>
  );
}