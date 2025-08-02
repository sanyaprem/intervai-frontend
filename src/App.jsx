import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Interview from './components/Interview';
import Summary from './components/Summary';

function App() {
  return (
    <BrowserRouter>
      <div className="relative">
        <DarkModeToggle />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function DarkModeToggle() {
  const toggle = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button
      onClick={toggle}
      className="absolute top-4 right-4 bg-blue-200 dark:bg-blue-700 text-sm px-3 py-1 rounded shadow"
    >
      🌓 Toggle Mode
    </button>
  );
}

export default App;
