import React, { useState } from "react";
import BootCard from "../BootCard/BootCard";


const LearnedWord = (props) => {
  const { userWords, randomWord} = props;
  console.log(userWords[0]);




  return( 
  <div>
     <BootCard word={randomWord} /> 
  </div>)
};

export default LearnedWord;

//{userWords.filter((word) => {
//      if(word[0]){
//       return }
// })}
/* return <li key={i}><Cards word= {first}/></li>; */
  // const filteredWord = userWords.filter((word, i, arr) => {
  //   if (word) {
  //     return i.name;
  //   }
  //   return word[i];
  // });