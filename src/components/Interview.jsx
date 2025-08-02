import { useState, useEffect } from 'react';
import { sampleQuestions } from '../data/sampleQuestions';
import { useNavigate, useLocation } from 'react-router-dom';
import QuestionCard from './QuestionCard';

export default function Interview() {
  const { state } = useLocation();
  const resume = state?.resume;
  const jd = state?.jd;

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [reset, setReset] = useState(false);
  const navigate = useNavigate();

  const handleNext = (answer) => {
    setAnswers([...answers, { ...sampleQuestions[index], answer }]);
    if (index + 1 < sampleQuestions.length) {
      setIndex(index + 1);
      setReset(true);
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

  useEffect(() => {
    setReset(false);
  }, [index]);

  return (
    <div className="p-6 max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-300">
        Question {index + 1} of {sampleQuestions.length}
      </h2>
      <QuestionCard
        question={sampleQuestions[index]}
        onNext={handleNext}
        reset={reset}
      />
    </div>
  );
}
