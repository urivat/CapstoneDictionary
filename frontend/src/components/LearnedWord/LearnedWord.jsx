import React, { useState } from "react";
import Definition from "../../pages/DefinitionPage/Definition";
import Cards from "../Collection/Cards";

const LearnedWord = (props) => {
  const { userWords , wordIndex , checkIndex} = props;

  const { loading, setLoading } = useState(true);
  console.log(userWords[0]);

const helpIndex = () =>
{
  let newHelper = {
    id: 1,
    name: 'string' , 
    Definition : 'string', 
    user_id: 1
  } 
  
}



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
  // const filteredWord = userWords.filter((word, i, arr) => {
  //   if (word) {
  //     return i.name;
  //   }
  //   return word[i];
  // });