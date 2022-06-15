import React from "react";

import BootCard from "../BootCard/BootCard";
import Collection from "../Collection/Collection";

function UserWords(props) {
  const { userWords } = props;

  const words = userWords.map((word, index) => {
    return (
      <span key={index} className="col-sm">
        <BootCard word={word} />
      </span>
    );
  });

  return (
    <div className="container-2">
      <div className="row">
     {words}
      </div>
    </div>
  );
}

export default UserWords;
