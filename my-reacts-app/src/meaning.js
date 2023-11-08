import React from "react";

export default function Meaning(props) {
  return (
    <div>
      <h1>{props.word[0].meanings[0].partOfSpeech}</h1>
      <p>{props.word[0].meanings[0].definitions[0].definition}</p>
    </div>
  );
}
