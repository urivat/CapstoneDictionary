import React, { useState } from "react";
import Cards from "../Collection/Cards";

const LearnedWord = (props) => {
  const { userWords, answerCount } = props;
  const [data , setData] = useState([])
  console.log(userWords)
 
 

  return (
    <div>
        <ul> 
          <li></li> 
        </ul>
    </div>
    )
  ;
};
       
          
export default LearnedWord;
//{userWords.filter((word) => {
     //      if(word[0]){
       //       return } 
         // })}
