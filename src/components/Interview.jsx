import { useState } from 'react';
import { sampleQuestions } from '../data/sampleQuestions';
import { useNavigate, useLocation } from 'react-router-dom';
import QuestionCard from './QuestionCard';

export default function Interview() {
  const { state } = useLocation();
  const resume = state?.resume;
  const jd = state?.jd;

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  const handleNext = (answer) => {
    setAnswers([...answers, { ...sampleQuestions[index], answer }]);
    if (index + 1 < sampleQuestions.length) {
      setIndex(index + 1);
    } else {
      navigate('/summary', {
        state: {
          answers: [...answers, { ...sampleQuestions[index], answer }],
          resume,
          jd,
        },
      });
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Question {index + 1} of {sampleQuestions.length}
      </h2>
      <QuestionCard question={sampleQuestions[index]} onNext={handleNext} />
 </div>
);
}