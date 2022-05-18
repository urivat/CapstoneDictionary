import React from "react";
import { useEffect, useState } from "react";
import {
  Box,
  typography,
  FilledInput,
  IconButton,
  Container,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import WordList from "../../components/WordList/WordList";
import "./HomePage.css";
// The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
// The "token" value is the JWT token that you will send in the header of any request requiring authentication
//TODO: Add an AddCars Page to add a car for a logged in user's garage
const HomePage = (props) => {
  const {allWords} = props
  const [word, setWord] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const shortenedWord = word.trim().toLowerCase();
    if (!shortenedWord || shortenedWord.split(" ").length > 1) return;
    navigate(`/search/${word}`);
  };

  return (
    <Container maxWidth="sm" className="container">
      <form onSubmit={handleSubmit} className="search-bar">
        <h1>Vocabulary</h1>
        <h3>SearchWord</h3>
        <input value={word} onChange={(event) => setWord(event.target.value)} />
        <button type="submit">search</button>
      </form>

      <WordList allWords= {allWords}/>
    </Container>
  );
};

export default HomePage;

// { wordData.meanings[0].definitions.map((def , index) => { return <p key={index}> {def.definition}</p>}) } */}

//  {/* <h3>Home Page for {user.username}</h3>
//         {word &&
//         word.map((word) => (
//           <span key={word.id}>
//             {word.name}: {word.definition}.<br/>
//           </span>
//         ))}*/}
