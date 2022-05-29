import React, { useState } from "react";
import Cards from "../Collection/Cards";

const LearnedWord = (props) => {
  const { userWords } = props;

  const { loading, setLoading } = useState(true);
  console.log(userWords[0]);

//   const filteredWord = userWords.filter((word, i, arr) => {
//     if (i !== arr[1]) {
//       return i.name;
//     }
//     return word.name;
//   });
// console.log(filteredWord)


  return <div>
  
     <Cards word={userWords[0]} /> 
  </div>;
};

export default LearnedWord;

//{userWords.filter((word) => {
//      if(word[0]){
//       return }
// })}
/* return <li key={i}><Cards word= {first}/></li>; */
