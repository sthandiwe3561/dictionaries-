import React from "react";

export default function Noun(props) {
  if (props.name[0].meanings[1]) {
    return (
      <div className="noun">
        <h1>{props.name[0].meanings[1].partOfSpeech}</h1>
        <p>{props.name[0].meanings[1].definitions[0].definition}</p>
      </div>
    );
  } else {
    return null;
  }
}
