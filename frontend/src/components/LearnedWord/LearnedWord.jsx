import React, { useState } from "react";
import Definition from "../../pages/DefinitionPage/Definition";
import BootCard from "../BootCard/BootCard";
import Cards from "../Collection/Cards";

const LearnedWord = (props) => {
  const { userWords , wordIndex , checkIndex} = props;

  const { loading, setLoading } = useState(true);
  console.log(userWords[0]);




  return( 
  <div>
     <BootCard word={userWords[0]} /> 
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