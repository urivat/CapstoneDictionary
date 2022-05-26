import React, { useState } from "react";
import Cards from "../Collection/Cards";

const LearnedWord = (props) => {
  const { userWords, answerCount } = props;
  const {loading,  setLoading} = useState(true)
  console.log(props)

 

  return (
    <>
    {userWords.map(function(word){
      return () => <p>{word.name}</p>
    })}
    </>
    )
  ;
};
       
          
export default LearnedWord;


//{userWords.filter((word) => {
     //      if(word[0]){
       //       return } 
         // })}
