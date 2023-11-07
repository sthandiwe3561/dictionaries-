import React, { useState } from "react";
import Meaning from "./meaning";
import Noun from "./noun";
import Synonyms from "./synonyms";
import axios from "axios";

export default function Search() {
  let [data, setData] = useState(null);
  let [word, setWord] = useState("night");
  let [load, setLoad] = useState(false);

  function search(event) {
    setWord(event.target.value);
  }

  function paragraph(event) {
    event.preventDefault();
    api();
  }

  function url(response) {
    setLoad(true);
    setData(response.data);
    console.log(response.data);
  }

  function api() {
    let apiKey = "eac360db5fc86ft86450f3693e73o43f";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    axios.get(apiUrl).then(url);
  }

  if (load === true) {
    return (
      <div className="dictionary">
        <div className="search">
          <div className="paragraph">
            <label className="label">Search for a word you want</label>
            <form onSubmit={paragraph}>
              <input
                type="search"
                placeholder="search a word"
                onChange={search}
                className="input"
              />
            </form>
          </div>
          <small className="hint">i.e. paris, wine, yoga, coding</small>
        </div>
        <section className="word">
          <h1>{data.word}</h1>
          <p>{data.phonetic}</p>
        </section>
        <div className="meaning">
          {" "}
          <Meaning word={data} />
        </div>
        <div>
          <Noun name={data} />
        </div>
        <div className="synonyms">
          {" "}
          <Synonyms words={data} />
        </div>
      </div>
    );
  } else {
    api();
    return <div>loading...</div>;
  }
}
