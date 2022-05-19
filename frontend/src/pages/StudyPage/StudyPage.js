import { getThemeProps } from "@material-ui/styles";
import React, { useState } from "react";
import Cards from "../../components/Collection/Cards";
import "./StudyPage.css";

function StudyPage({userWords}) {
  
 
  const [answerCount, setAnswerCount] = useState(0)
  
  const handleCorrect= (e) => {
    e.preventDefault()
    setAnswerCount(answerCount + 1)
    
  } 
   
 
  

  return (
    <div className="study">
      <div className="study-content">
        <h1>Study Cards</h1>
        <div>
          <img
            src="https://jooinn.com/images/ancient-book-7.png"
            alt="old books"
          />
          <div className="container">
          <div>          
          </div>
            <form onSubmit={handleCorrect}>
              <div>
                <h2>I got it right {answerCount} times!</h2>
                <button className='button' value={answerCount}>Correct</button>  
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudyPage;
//increment count up.