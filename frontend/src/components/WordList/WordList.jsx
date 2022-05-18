import React, { useState , useEffect } from 'react'
import Cards from '../Collection/Cards'
import axios from 'axios'
import './WordList.css'

const WordList = (props) => {
    const {allWords} = props
   
   return ( 
   <div className='container'>
        <h3>Add one to your collection</h3>
        {allWords.map((word) =>  <span key={word.id} className='card-display' ><Cards word= {word}/></span>)}
    </div>);
}
 
export default WordList;

   
//send words from app component to here as well as my word component and map the two together to create a list of words to have that access. 
//can create the jsx design in the word component. we will also need a card component to have the words maped to as well. 