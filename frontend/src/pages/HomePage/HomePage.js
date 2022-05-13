import React from "react";
import { useEffect, useState} from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import {Box, typography , FilledInput , IconButton, Container} from '@material-ui/core';
import {Search as SearchIcon } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';
// The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
const HomePage = () => {
  
  const [user, token] = useAuth();
  const [word, setWord] = useState('');
  
  
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const shortenedWord = word.trim().toLowerCase();
    if(!shortenedWord || shortenedWord.split(' ').length > 1) return;
    navigate(`/search/${word}`)
  }


    

return (
        <Container maxWidth = 'sm'>
        <form onSubmit={handleSubmit}>
          <h1>HomePage for {user.username} </h1>
          <h3>SearchWord</h3>
          <input value={word} onChange= {event => setWord(event.target.value)} />
          {/* <FilledInput id="outlined-basic" margin="none"  label="Outlined" variant="outlined" value={word} onChange= {event => setWord(event.target.value)} /> */}
          <button  type="submit">search</button> 
        </form>
        
        </Container>
); 
};

export default HomePage;




  //  {/* <h3>Home Page for {user.username}</h3>
  //         {word &&
  //         word.map((word) => (
  //           <span key={word.id}>
  //             {word.name}: {word.definition}.<br/>
  //           </span>
  //         ))}*/}