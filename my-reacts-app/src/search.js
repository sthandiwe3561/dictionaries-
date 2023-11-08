import React, { useState } from "react";
import Meaning from "./meaning";
import Noun from "./noun";
import Synonyms from "./synonyms";
import Images from "./images";
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
    let api = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(api).then(url);
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
          <h1>{data[0].word}</h1>
          <p>{data[0].phonetic}</p>
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
        <div>
          <Images image={data} />
        </div>
      </div>
    );
  } else {
    api();
    return <div>loading...</div>;
  }
}
