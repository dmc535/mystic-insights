import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Star, ArrowRight } from 'lucide-react';
import MysticBackground from '../components/MysticBackground';
import { zodiacSigns, getHoroscope } from '../data/astrologyData';

export default function Astrology() {
  const [selectedSign, setSelectedSign] = useState('');
  const [horoscope, setHoroscope] = useState('');

  const handleSignSelect = (sign: string) => {
    setSelectedSign(sign);
    setHoroscope(getHoroscope(sign));
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
            Celestial Insights
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <Sun className="w-6 h-6 text-yellow-400" />
            <Moon className="w-6 h-6 text-purple-300" />
            <Star className="w-6 h-6 text-blue-300" />
          </div>
          <p className="text-lg text-purple-200/80 max-w-2xl mx-auto">
            Discover what the stars have aligned for you today. Select your zodiac sign to receive your daily celestial guidance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {zodiacSigns.map((sign, index) => (
            <motion.button
              key={sign.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleSignSelect(sign.name)}
              className={`relative group ${
                selectedSign === sign.name ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              <div className="relative bg-black/30 backdrop-blur-lg border border-white/10 rounded-xl p-6 transition-all duration-300 group-hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity" />
                <img
                  src={sign.symbol}
                  alt={sign.name}
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-purple-200 mb-2">
                  {sign.name}
                </h3>
                <p className="text-sm text-purple-300/80">
                  {sign.date}
                </p>
              </div>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {horoscope && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-black/30 backdrop-blur-lg border border-white/10 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <ArrowRight className="w-5 h-5 text-purple-300" />
                  <h2 className="text-2xl font-semibold text-purple-200">
                    Your Daily Horoscope
                  </h2>
                </div>
                <p className="text-lg text-purple-300/90 leading-relaxed">
                  {horoscope}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}