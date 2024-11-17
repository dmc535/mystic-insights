import { useState, useCallback } from 'react';
import { fortunes, questions } from '../data/fortuneTellerData';
import { useSound } from './useSound';

export function useFortuneTeller() {
  const [question, setQuestion] = useState('');
  const [fortune, setFortune] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [previousFortunes, setPreviousFortunes] = useState<string[]>([]);
  const [currentQuestion] = useState(questions[Math.floor(Math.random() * questions.length)]);
  const { playMystical, playReveal } = useSound();

  const revealFortune = useCallback(async () => {
    if (!question.trim()) return;
    
    setIsThinking(true);
    playMystical();
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const newFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    setFortune(newFortune);
    setPreviousFortunes(prev => [...prev, newFortune]);
    setQuestion('');
    setIsThinking(false);
    playReveal();
  }, [question, playMystical, playReveal]);

  const clearHistory = useCallback(() => {
    setPreviousFortunes([]);
    setFortune('');
  }, []);

  return {
    question,
    setQuestion,
    fortune,
    isThinking,
    currentQuestion,
    revealFortune,
    previousFortunes,
    clearHistory
  };
}