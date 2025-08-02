import { useLocation, useNavigate } from 'react-router-dom';

export default function Summary() {
  const { state } = useLocation();
  const answers = state?.answers || [];
  const resume = state?.resume;
  const jd = state?.jd;
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">Interview Summary</h2>

      {resume && (
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">📄 Resume uploaded: {resume.name}</p>
      )}
      {jd && (
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">📃 JD uploaded: {jd.name}</p>
      )}

      {answers.map((item, i) => (
        <div key={i} className="mb-6">
          <p className="font-semibold text-gray-800 dark:text-gray-100">{i + 1}. {item.question}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 italic">Your Answer:</p>
          <p className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-sm text-gray-800 dark:text-white">
            {item.answer}
          </p>
        </div>
      ))}

      <button
        onClick={() => navigate('/')}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 dark:hover:bg-blue-500"
      >
        Go Home
      </button>
    </div>
  );
}
