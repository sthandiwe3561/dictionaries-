import React from "react";

export default function Meaning(props) {
  return (
    <div>
      <h1>{props.word.meanings[0].partOfSpeech}</h1>
      <p>{props.word.meanings[0].definition}</p>
    </div>
  );
}
