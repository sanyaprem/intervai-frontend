import { useLocation, useNavigate } from 'react-router-dom';

export default function Summary() {
  const { state } = useLocation();
  const answers = state?.answers || [];
  const resume = state?.resume;
  const jd = state?.jd;
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Interview Summary</h2>

      {resume && (
        <p className="text-sm text-gray-600 mb-2">📄 Resume uploaded: {resume.name}</p>
      )}
      {jd && (
        <p className="text-sm text-gray-600 mb-4">📃 JD uploaded: {jd.name}</p>
      )}

      {answers.map((item, i) => (
        <div key={i} className="mb-6">
          <p className="font-semibold text-gray-800">{i + 1}. {item.question}</p>
          <p className="text-sm text-gray-600 mt-1 italic">Your Answer:</p>
          <p className="bg-gray-100 p-3 rounded text-sm">{item.answer}</p>
        </div>
      ))}

      <button
        onClick={() => navigate('/')}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Go Home
      </button>
 </div>
);
}