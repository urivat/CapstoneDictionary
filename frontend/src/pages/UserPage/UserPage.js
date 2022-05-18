import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import Cards from "../../components/Collection/Cards";
import axios from "axios";
import UserWords from "../../components/UserWords/UserWords";
import "./UserPage.css";

const UserPage = (props) => {
  const { userWords, user } = props;

  return (
    <div className="grid-container">
      <h1 className="grid-item1">{user.username} </h1>
      <UserWords  className= 'grid-item2' userWords={userWords} />
      </div>
  

    //return(
    //       <>
    //        {someArray.map(someItem => {
    //            return <p>{someItem.name}</p>
    //        })
    //       </>
    // )
  );
};

export default UserPage;
