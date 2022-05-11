import React, { useState, useEffect } from 'react'
import useAuth from "../../hooks/useAuth";
import Collection from '../../components/Collection/Collection';
import axios from 'axios';

const UserPage = ({dictionary}) => {
    const [user, token] = useAuth();
    const [wordList, setWordList] = useState([]);

    useEffect(() => {
  const getAllWords = async () => {
    try {
      let res = await axios.get('http://127.0.0.1:8000/api/word/', {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setWordList(res.data)
    } catch (error) {
      console.log(error.message)
    }
  }; getAllWords();
}, [token]);

  return (
    <>
    <h1>{user.username} </h1>
    <ul> 
    {wordList.map((word , index)=> {return <li key={index}><Collection word= {word}/></li>})}    
    </ul>
    </>
    
   //return(
//       <>
//        {someArray.map(someItem => {
//            return <p>{someItem.name}</p>
//        })
//       </>
// )
    

    
  )
}

export default UserPage