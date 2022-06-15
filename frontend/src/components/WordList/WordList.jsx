import React, { useState } from 'react'
import './WordList.css'

import BootCard2 from '../BootCard/BootCard2';

const WordList = (props) => {

    const [collected , setCollected] = useState([]);

    const {allWords} = props
    const mappedWords = allWords.map((word) =>  
    <span key={word.id}>
    <BootCard2 word= {word}/>
    </span>)
    
   return ( 
   <div className='container'>
        <h3>All Words availabe for study!</h3>
        <div>{mappedWords}</div>
        
    </div>);
}
 
export default WordList;

   
//send words from app component to here as well as my word component and map the two together to create a list of words to have that access. 
//can create the jsx design in the word component. we will also need a card component to have the words maped to as well. 