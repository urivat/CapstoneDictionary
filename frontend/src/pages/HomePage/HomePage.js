import React from "react";
import WordList from "../../components/WordList/WordList";
import "./HomePage.css";

const HomePage = (props) => {
  const {allWords} = props
  

  return (
      <div className="user-word">
      <p className="text">This is a collection of all <strong>available</strong> words <br/>
      Click Study to see definitions</p>
      <WordList allWords= {allWords}/>

      </div>
      
    
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
