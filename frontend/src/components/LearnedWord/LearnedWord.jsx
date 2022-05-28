import React, { useState } from "react";
import Cards from "../Collection/Cards";

const LearnedWord = (props) => {
  const { userWords, answerCount } = props;
  const {loading,  setLoading} = useState(true)
  console.log(userWords)

const mappedWords = () => {
  userWords.map((callbk , i ) => {
    callbk.filter((word , i) => {
      if(word[i] === 0){
        return word
      }
      return <span><Cards word= {word[i]}/></span>
    } 
  )})
}
  
  
  
  
  
  
  
  
  return (
    <div>
    {mappedWords()}
    </div>
    )
  ;
};
       
          
export default LearnedWord;


//{userWords.filter((word) => {
     //      if(word[0]){
       //       return } 
         // })}
/* return <li key={i}><Cards word= {first}/></li>; */