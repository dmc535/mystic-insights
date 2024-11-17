import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LayoutGrid, Hash, Stars, Gem } from 'lucide-react';
import MysticBackground from '../components/MysticBackground';

export default function Home() {
  const services = [
    {
      icon: LayoutGrid,
      title: 'Tarot Reading',
      description: 'Discover insights through ancient tarot wisdom',
      link: '/tarot',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Hash,
      title: 'Numerology',
      description: 'Unlock the hidden meanings in your numbers',
      link: '/numerology',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Stars,
      title: 'Astrology',
      description: 'Explore your celestial connections',
      link: '/astrology',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Gem,
      title: 'Fortune Telling',
      description: 'Peek into what destiny has in store',
      link: '/fortune',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <div className="relative min-h-screen flex flex-col">
      <MysticBackground />
      
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-4 leading-normal">
              Welcome to Mystic Insights
            </h1>
            <p className="text-xl text-purple-200/80 font-inter">
              Explore the mysteries of the universe through ancient wisdom
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={service.link}
                  className="block group"
                >
                  <div className="relative bg-black/30 backdrop-blur-lg border border-white/10 rounded-xl p-4 h-full transition-transform duration-300 group-hover:-translate-y-1">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity`} />
                    <service.icon className="w-10 h-10 text-purple-300 mb-3" />
                    <h3 className="text-lg font-semibold text-purple-200 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-sm text-purple-300/80">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}