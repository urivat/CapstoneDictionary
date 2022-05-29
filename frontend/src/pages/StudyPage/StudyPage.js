import { Container } from "@material-ui/core";

import React, { useState } from "react";
import Cards from "../../components/Collection/Cards";
import Containers from '../../components/Containers'
import "./StudyPage.css";
import LearnedWord from "../../components/LearnedWord/LearnedWord";




function StudyPage(props) {
 
const {userWords , newLearned} = props





  return (
    <div>
      <div>
        <h1>Study Cards</h1> 
        <LearnedWord userWords={userWords}/>
        
            
        <div>
        <div>
        <img
            src="https://jooinn.com/images/ancient-book-7.png"
            alt="old books"
          />
          </div>
          
          <div>
            <Containers  newLearned={newLearned}/>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudyPage;
//increment count up.
