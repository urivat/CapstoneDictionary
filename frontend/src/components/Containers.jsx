import React, { useState } from "react";
import LearnedWord from "./LearnedWord/LearnedWord";

const Containers = (props) => {
  const { userWords, newLearned } = props;
  const [answerCount, setAnswerCount] = useState(0);

  const handleCorrect = (e) => {
    e.preventDefault();
    setAnswerCount(answerCount + 1);
  };

  const handleSubmit = () => {
    const newArray = userWords.filter((word) => word[0]);
    newLearned(newArray);
  };

  

  return (
    <div>
      <form onSubmit={handleCorrect}>
        <h2>I got it right {answerCount} times!</h2>
        <LearnedWord userWords={userWords} answerCount={answerCount} />
        <button className="button" value={answerCount}>
          Correct
        </button>
      </form>
      <form onSubmit={handleSubmit}>
      <button>Add</button>
      </form>
    </div>
  );
};
export default Containers;
