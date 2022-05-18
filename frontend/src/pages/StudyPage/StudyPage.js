import React, { useState } from "react";
import Cards from "../../components/Collection/Cards";
import "./StudyPage.css";

function StudyPage(props) {
  const { statTracker} = props;
  const [stats, setStats] = useState(false);
  const [buttonStatus, setButtonStatus] = useState('inactive')
  const [newButtonStatus, setNewButtonStatus] =  useState('inactive')

  const handleCorrect= (e) => {
    e.preventDefault()
    if (buttonStatus === "inactive") {
    setButtonStatus("active");
    setStats(true)
  } else {
    setButtonStatus("inactive")
    setStats(false);
  } statTracker(stats)
  };
  const handleIncorrect = (e) =>{
    e.preventDefault();
    if(newButtonStatus === 'inactive'){
      setNewButtonStatus('active');
      setStats(false);

    }
    else {
      setNewButtonStatus('inactive')
      setStats(false)
}     statTracker(stats)
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
            <form>
              <div>
                <h2>Did you answer correctly?</h2>
                <button className= {buttonStatus}  onClick={handleCorrect}>Correct</button>
                <button className= {newButtonStatus}   onClick={handleIncorrect}>wrong</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudyPage;
