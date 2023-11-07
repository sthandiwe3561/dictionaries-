import React from "react";

export default function Noun(props) {
  if (props.name.meanings[1]) {
    return (
      <div className="noun">
        <h1>{props.name.meanings[1].partOfSpeech}</h1>
        <p>{props.name.meanings[1].definition}</p>
      </div>
    );
  } else {
    return null;
  }
}
