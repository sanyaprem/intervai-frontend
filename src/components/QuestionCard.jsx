import { useState } from 'react';

export default function QuestionCard({ question, onNext }) {
  const [input, setInput] = useState('');

  return (
    <div className="bg-white shadow p-6 rounded-lg">
      <p className="text-lg font-medium mb-4">{question.question}</p>
      <textarea
        rows={5}
        className="w-full border border-gray-300 rounded p-2 mb-4"
        placeholder="Type your answer here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => input.trim() && onNext(input)}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Next
      </button>
 </div>
);
}