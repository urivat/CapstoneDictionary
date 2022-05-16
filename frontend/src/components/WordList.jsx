import React, { useState , useEffect } from 'react'
import Cards from './Collection/Cards'
import axios from 'axios'


const WordList = () => {
    const [allWords , setAllWords] = useState([])
    
    useEffect(() => {
        const getAllWords = async () => {
          try {
            let res = await axios.get('http://127.0.0.1:8000/api/word/all/', {
            
            });
            setAllWords(res.data)
          } catch (error) {
            console.log(error.message)
          }
        }; getAllWords();
      }, []);
   
   return ( 
   <div>
        <h3>Add one to your collection</h3>
        {allWords.map((word) =>  <span key={word.id}><Cards word= {word}/></span>)}
    </div>);
}
 
export default WordList;

    // useEffect(() => {
    //     const getAllWords = () => axios.get('http://127.0.0.1:8000/api/word/all/').then((res) => {
    //     console.log(res.data)
    //       setAllWords(res.data);
    //     }, getAllWords())       
    //   }, [])
//send words from app component to here as well as my word component and map the two together to create a list of words to have that access. 
//can create the jsx design in the word component. we will also need a card component to have the words maped to as well. 