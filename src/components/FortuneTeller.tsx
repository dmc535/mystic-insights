import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MysticHeader from './MysticHeader';
import QuestionInput from './QuestionInput';
import FortuneDisplay from './FortuneDisplay';
import ThinkingAnimation from './ThinkingAnimation';
import MysticBackground from './MysticBackground';
import { useFortuneTeller } from '../hooks/useFortuneTeller';

export default function FortuneTeller() {
  const {
    question,
    setQuestion,
    fortune,
    isThinking,
    currentQuestion,
    revealFortune,
    previousFortunes,
    clearHistory
  } = useFortuneTeller();

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
      <MysticBackground />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 max-w-md w-full bg-black/30 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10"
      >
        <MysticHeader />

        <div className="space-y-6">
          <QuestionInput
            question={question}
            setQuestion={setQuestion}
            onSubmit={revealFortune}
            isThinking={isThinking}
            currentQuestion={currentQuestion}
          />

          <AnimatePresence mode="wait">
            {isThinking ? (
              <ThinkingAnimation key="thinking" />
            ) : fortune ? (
              <FortuneDisplay key="fortune" fortune={fortune} previousFortunes={previousFortunes} />
            ) : null}
          </AnimatePresence>

          {previousFortunes.length > 0 && (
            <motion.button
              onClick={clearHistory}
              className="text-sm text-purple-300 hover:text-purple-100 transition-colors mt-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Clear History
            </motion.button>
          )}
        </div>
      </motion.div>
    </div>
  );
}