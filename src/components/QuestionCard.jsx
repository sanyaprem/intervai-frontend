import { useState, useEffect } from 'react';

export default function QuestionCard({ question, onNext, reset }) {
  const [input, setInput] = useState('');

  useEffect(() => {
    if (reset) {
      setInput('');
    }
  }, [reset]);

  return (
    <div className="bg-white dark:bg-gray-800 shadow p-6 rounded-lg">
      <p className="text-lg font-medium mb-4 text-gray-800 dark:text-gray-100">{question.question}</p>
      <textarea
        rows={5}
        className="w-full border border-gray-300 rounded p-2 mb-4 dark:bg-gray-700 dark:text-white"
        placeholder="Type your answer here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => input.trim() && onNext(input)}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 dark:hover:bg-green-500"
      >
        Next
      </button>
    </div>
  );
}
