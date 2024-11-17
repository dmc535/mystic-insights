import React from 'react';
import { motion } from 'framer-motion';

export default function MysticBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-mystic" />
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
            opacity: Math.random() * 0.5 + 0.25,
          }}
          animate={{
            opacity: [null, 0, null],
            scale: [null, 1.5, null],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </>
  );
}