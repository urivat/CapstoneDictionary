import React from "react";
import UserWords from "../../components/UserWords/UserWords";
import "./UserPage.css";

const UserPage = (props) => {
  const { userWords, user } = props;

  return (
    <div className="grid-container">
      <h1 className="grid-item1">{user.username} </h1>
      <UserWords className="grid-item2" userWords={userWords} />
    </div>
  );
};

export default UserPage;
