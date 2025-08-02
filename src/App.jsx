export default function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">IntervAI</h1>
      <p className="text-lg text-gray-700">Your AI-powered interview assistant is ready.</p>
      <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Start Interview
      </button>
    </div>
  );
}