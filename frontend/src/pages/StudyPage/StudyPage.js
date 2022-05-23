import { Container } from "@material-ui/core";
import { getThemeProps } from "@material-ui/styles";
import React, { useState } from "react";
import Cards from "../../components/Collection/Cards";
import Containers from '../../components/Containers'
import "./StudyPage.css";

function StudyPage(props) {
 
const {userWords , newLearned} = props



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
            <Containers userWords={userWords} newLearned= {newLearned} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudyPage;
//increment count up.
