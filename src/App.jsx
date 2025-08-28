import { useEffect, useState } from 'react'
import './App.css'
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback';

function App() {

  const [feedback, setFeedback] = useState(() => { 
    try {
      const savedFeedback = localStorage.getItem('feedback');
      return savedFeedback ? JSON.parse(savedFeedback) : {good:0, neutral:0, bad:0};
    }
    catch (error) { 
      console.error("Local Storage read error:", error);
      return {good:0, neutral:0, bad:0};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("feedback", JSON.stringify(feedback));
    } catch (error) {
      console.error("Local Storage write error:", error);
    }
  }, [feedback]);

  const updateFeedback = (feedbackType) => { 
    setFeedback((prev) => ({ 
      ...prev,
      [feedbackType]: prev[feedbackType] + 1
    }));
};
  
const resetFeedback = () => { 
  setFeedback({
    good: 0,
    neutral: 0,
    bad: 0
  });
}

const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
const positivePercentage = totalFeedback ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <>
      <Description />
      <Options onUpdateFeedback={updateFeedback} onReset={resetFeedback} total={totalFeedback} />
      <Feedback feedbackCounts={feedback} total={totalFeedback} positivePercentage={positivePercentage} />
    </>
  );
}

export default App
