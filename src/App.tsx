import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Tarot from './pages/Tarot';
import Numerology from './pages/Numerology';
import Astrology from './pages/Astrology';
import FortuneTeller from './components/FortuneTeller';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tarot" element={<Tarot />} />
            <Route path="/numerology" element={<Numerology />} />
            <Route path="/astrology" element={<Astrology />} />
            <Route path="/fortune" element={<FortuneTeller />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;