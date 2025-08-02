import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Landing() {
  const navigate = useNavigate();
  const [resume, setResume] = useState(null);
  const [jd, setJd] = useState(null);

  const handleStart = () => {
    navigate('/interview', {
      state: { resume, jd },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-br from-blue-100 to-white dark:from-gray-800 dark:to-gray-900">
      <h1 className="text-5xl font-bold text-blue-700 dark:text-blue-300 mb-4">IntervAI</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Your AI-powered DSA interview buddy</p>

      <div className="mb-4 w-full max-w-md text-left">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Upload Resume (optional)</label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setResume(e.target.files[0])}
          className="block w-full text-sm border border-gray-300 rounded p-2 dark:bg-gray-800 dark:text-white"
        />
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
          {resume ? `📄 ${resume.name}` : 'No resume selected'}
        </p>
      </div>

      <div className="mb-6 w-full max-w-md text-left">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Upload Job Description (optional)</label>
        <input
          type="file"
          accept=".pdf,.doc,.docx,.txt"
          onChange={(e) => setJd(e.target.files[0])}
          className="block w-full text-sm border border-gray-300 rounded p-2 dark:bg-gray-800 dark:text-white"
        />
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
          {jd ? `📃 ${jd.name}` : 'No JD selected'}
        </p>
      </div>

      <button
        onClick={handleStart}
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 dark:hover:bg-blue-500 transition"
      >
        Start Interview
      </button>
    </div>
  );
}
