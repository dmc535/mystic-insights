import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LayoutGrid, Hash, Stars, Gem } from 'lucide-react';

export default function Navigation() {
  const links = [
    { to: '/tarot', icon: LayoutGrid, label: 'Tarot' },
    { to: '/numerology', icon: Hash, label: 'Numerology' },
    { to: '/astrology', icon: Stars, label: 'Astrology' },
    { to: '/fortune', icon: Gem, label: 'Fortune' },
  ];

  return (
    <nav className="bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <NavLink to="/" className="text-xl font-bold text-purple-300">
            Mystic Insights
          </NavLink>
          
          <div className="flex space-x-4">
            {links.map(({ to, icon: Icon, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `relative px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive ? 'text-purple-300' : 'text-purple-400 hover:text-purple-200'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="flex items-center gap-2">
                      <Icon className="w-4 h-4" />
                      {label}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500"
                        initial={false}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}