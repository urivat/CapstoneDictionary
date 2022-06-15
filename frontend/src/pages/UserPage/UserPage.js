import React from "react";
import UserWordList from "../../components/UserWordList/UserWordList";
import "./UserPage.css";

const UserPage = (props) => {
  const { userWords, user } = props;

  return (
    <div className="grid-container">
      <h1 className="grid-item1">These are all of the user word for current user {user.username} </h1>
      <UserWordList userWords={userWords} />
    </div>
  );
};

export default UserPage;
