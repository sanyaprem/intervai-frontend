import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Interview from './components/Interview';
import Summary from './components/Summary';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;