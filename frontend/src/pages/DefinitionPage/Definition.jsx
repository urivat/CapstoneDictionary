import axios from "axios";
import React, {  useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Collection from "../../components/Collection/Collection";
import Button from "@material-ui/core/Button";
import useAuth from "../../hooks/useAuth";

function Definition() {
  const { word } = useParams();
  const navigate = useNavigate();
  const [wordData, setWordData] = useState([])
  const [loading, setLoading] = useState(true)
  const [user , token] = useAuth();


  useEffect(() => {
    const fetchDefinition = async () => {
      const res = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      console.log(res.data);
      setWordData(res.data[0])
      setLoading(false)
    };
    fetchDefinition();
  }, [word]);

  const addToCollection = async (event) => {
    event.preventDefault()
    const resp = await axios.post("http://127.0.0.1:8000/api/word/", {
      headers: {
            Authorization: "Bearer " + token,
    }, body: {
        name: wordData.word, 
        definition: wordData.meanings[0].definitions[0].definition,
        user_id: user.id 
    } , }); console.log(resp.data)
    
      };

  

  return (
    <div className="container" onSubmit={addToCollection}>
    <h3>Definition</h3>
    <div >
      {loading ? 'loading' : `${wordData.word} `} <br/>
      {loading ? 'loading' : wordData.meanings[0].definitions[0].definition}
      {/* {loading ? 'loading' : wordData.meanings[0].definitions.map((def , index) => { return <p key={index}> {def.definition}</p>}) } */}
      <Button type="submit" variant="contained" size="small" color="inherit">Add</Button>
    </div>
    </div>
      
        

      
   
  );
}

export default Definition;
