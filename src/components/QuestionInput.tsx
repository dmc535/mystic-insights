import React from 'react';
import { Send } from 'lucide-react';

interface QuestionInputProps {
  question: string;
  setQuestion: (question: string) => void;
  onSubmit: () => void;
  isThinking: boolean;
  currentQuestion: string;
}

export default function QuestionInput({
  question,
  setQuestion,
  onSubmit,
  isThinking,
  currentQuestion,
}: QuestionInputProps) {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && question.trim() && !isThinking) {
      onSubmit();
    }
  };

  return (
    <div>
      <label className="block text-purple-300 text-sm mb-2">
        {currentQuestion}
      </label>
      <div className="relative">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-full bg-white/10 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
          placeholder="Share your thoughts..."
        />
        <button
          onClick={onSubmit}
          disabled={isThinking || !question.trim()}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-purple-300 hover:text-purple-100 transition-colors disabled:opacity-50"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}