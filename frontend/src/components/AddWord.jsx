import React from 'react'
import useAuth from '../hooks/useAuth'
import axios from 'axios'
import { Button } from '@material-ui/core'
//
const AddWord = ({wordData}) => {

  const [user , token] = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    try { axios.post("http://127.0.0.1:8000/api/word/", {
     headers: {
       Authorization: "Bearer " + token,
     },
     body: {
       id: 1,
       name: 'light',
       definition: 'Visible electromagnetic radiation.',
       user_id: 1,
     }, 
   }).then((res) => {
     const responseWords = res.data;
     console.log(responseWords)
    })} catch (error) {
      console.log(error)
    } 
 }


  return ( 
    <div onSubmit={handleSubmit}>
    <Button type="submit" variant="contained" size="small" color="inherit">Add</Button>
    </div>
    
   );
}
 
export default AddWord;