import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hash, Calendar, User, Sparkles } from 'lucide-react';
import MysticBackground from '../components/MysticBackground';
import { calculateLifePathNumber, calculateDestinyNumber, getNumberMeaning } from '../data/numerologyData';

export default function Numerology() {
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [results, setResults] = useState<{
    lifePathNumber: number;
    destinyNumber: number;
  } | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !birthdate) return;

    const lifePathNumber = calculateLifePathNumber(birthdate);
    const destinyNumber = calculateDestinyNumber(name);

    setResults({ lifePathNumber, destinyNumber });
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
            Numerological Insights
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <Hash className="w-6 h-6 text-purple-300" />
            <Calendar className="w-6 h-6 text-pink-300" />
            <User className="w-6 h-6 text-blue-300" />
          </div>
          <p className="text-lg text-purple-200/80 max-w-2xl mx-auto">
            Discover the hidden meanings in your numbers. Enter your details below to reveal your Life Path and Destiny Numbers.
          </p>
        </motion.div>

        <div className="max-w-xl mx-auto">
          <motion.form
            onSubmit={handleCalculate}
            className="bg-black/30 backdrop-blur-lg border border-white/10 rounded-xl p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-purple-200 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/10 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label htmlFor="birthdate" className="block text-sm font-medium text-purple-200 mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="birthdate"
                  value={birthdate}
                  onChange={(e) => setBirthdate(e.target.value)}
                  className="w-full bg-white/10 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-3 px-4 rounded-lg hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Calculate Numbers
              </motion.button>
            </div>
          </motion.form>

          <AnimatePresence mode="wait">
            {results && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                {[
                  { title: 'Life Path Number', number: results.lifePathNumber },
                  { title: 'Destiny Number', number: results.destinyNumber }
                ].map((result, index) => (
                  <motion.div
                    key={result.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="relative bg-black/30 backdrop-blur-lg border border-white/10 rounded-xl p-8 overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <Sparkles className="w-5 h-5 text-purple-300" />
                        <h2 className="text-2xl font-semibold text-purple-200">
                          {result.title}
                        </h2>
                      </div>
                      
                      <div className="flex items-center gap-6 mb-4">
                        <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center">
                          <span className="text-3xl font-bold text-purple-300">
                            {result.number}
                          </span>
                        </div>
                        <div className="flex-1">
                          <p className="text-lg text-purple-300/90 leading-relaxed">
                            {getNumberMeaning(result.number)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}