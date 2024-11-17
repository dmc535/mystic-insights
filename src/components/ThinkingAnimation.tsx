import React from 'react';
import { motion } from 'framer-motion';

export default function ThinkingAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-center py-8"
    >
      <motion.div 
        className="flex justify-center space-x-3"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        {[0, 72, 144, 216, 288].map((rotation, index) => (
          <motion.div
            key={index}
            className="w-2 h-2 bg-purple-400 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              rotate: rotation
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: index * 0.1
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}