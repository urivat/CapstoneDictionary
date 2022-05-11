import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Definition() {
  const { word } = useParams();
  const navigate = useNavigate();
  const [definition, setDefinition] = useState([])
  useEffect(() => {
    const fetchDefinition = async () => {
      const res = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      console.log(res.data);
      setDefinition(res.data)
    };
    fetchDefinition();
  }, []);

  return (
    <div>
      Definition
      <h1>Definition</h1>
      {definition.map((def , index) => <ul>
        <li key={index}> {def.meaning.map(meaning => meaning.definition)} </li>

      </ul>)}
    </div>
  );
}

export default Definition;
