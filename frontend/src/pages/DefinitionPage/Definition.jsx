import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Collection from "../../components/Collection/Collection";


function Definition() {
  const { word } = useParams();
  const navigate = useNavigate();
  const [wordData, setWordData] = useState([])
  const [loading, setLoading] = useState(true)
  
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
  }, []);

  return (
    <div>
    <h3>Definition</h3>
      {loading ? 'loading' : `${wordData.word}: `} <br/>
      {loading ? 'loading' : wordData.meanings[0].definitions[0].definition}
      {/* {loading ? 'loading' : wordData.meanings[0].definitions.map((def , index) => { return <p key={index}> {def.definition}</p>}) } */}
    </div>
      
        

      
   
  );
}

export default Definition;
