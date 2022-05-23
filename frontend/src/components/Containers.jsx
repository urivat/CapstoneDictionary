import React, { useState } from "react";
import LearnedWord from "./LearnedWord/LearnedWord";

const Containers = (props) => {
  const { userWords, newLearned } = props;
  const [answerCount, setAnswerCount] = useState(0);

  const handleCorrect = (e) => {
    e.preventDefault();
    setAnswerCount(answerCount + 1);
  };

  const LearningList = () => {
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
      <div>
        <button className="button-2" onClick={LearningList}>
          Add
        </button>
      </div>
    </div>
  );
};
export default Containers;
