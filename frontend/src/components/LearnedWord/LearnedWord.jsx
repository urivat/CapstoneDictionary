import React, { useState } from "react";
import Cards from "../Collection/Cards";

const LearnedWord = (props) => {
  const { userWords, answerCount } = props;

  return (
    <div>
      <ul>
        {userWords.map((word, index) => {
          return (
            <li key={word.id}>
              <Cards word={word} answerCount={answerCount} />
              {word[index]}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default LearnedWord;
//
