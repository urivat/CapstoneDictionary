import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../../components/Collection/Cards";
import Containers from "../../components/Containers";
import "./StudyPage.css";
import LearnedWord from "../../components/LearnedWord/LearnedWord";
import { useNavigate, useParams } from "react-router-dom";

function StudyPage(props) {
  const { userWords, newLearned } = props;

  const { wordId } = useParams();
  const [learned, setLearned] = useState(Boolean);
  const [wordData, setWordData] = useState([]);
  const [loading , setLoading] = useState([])


  useEffect(() => {
    async function wordByID() {
    let res = await axios
    .get(`http://127.0.0.1:8000/api/word/${wordId}/`);
    console.log(res.data);
      setWordData(res.data)
      setLoading(false)
  } 

  }, [wordId]);


  const handleSubmit = (e) => {
    e.preventDefault();
    const WordIdToAdd = userWords.filter((word) => word.id === wordId ).map((word , index) =>{
      return <span><BootCard word={word}/></span>
      
    })
    setWordData(WordIdToAdd)
    
    
  }





  const handleLearned = (e) => {
    e.preventDefault();
    setLearned(true);
  };

  
  return (
    <div>
      <div>
        <h1>Study Cards</h1>
        <LearnedWord userWords={userWords} checkIndex={checkIndex} />
        <div>
          <div>
            <img
              src="https://jooinn.com/images/ancient-book-7.png"
              alt="old books"
            />
          </div>

          <div>
            <Containers newLearned={newLearned} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudyPage;
//increment count up.
