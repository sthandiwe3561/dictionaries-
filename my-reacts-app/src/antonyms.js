import React from "react";

export default function Antonyms(props) {
  if (props.light[0].meanings[0]) {
    return (
      <div className="antonyms">
        <h1>antonyms</h1>
        <p>
          <span>{props.light[0].meanings[0].antonyms[0]}</span>,{" "}
          <span>{props.light[0].meanings[0].antonyms[1]}</span>
        </p>
      </div>
    );
  } else {
    return null;
  }
}
