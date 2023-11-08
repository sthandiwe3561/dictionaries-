import React from "react";

export default function Synonyms(props) {
  return (
    <div>
      <h1>synonyms</h1>
      <p>
        <span>{props.words[0].meanings[0].synonyms[0]}</span>,{" "}
        <span>{props.words[0].meanings[0].synonyms[1]}</span>
      </p>
    </div>
  );
}
