import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import logo from "./dictionary.png";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function whatKeyword(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function pexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(handleResponse);

    let pexelApiKey =
      "563492ad6f917000010000010a52ecff294041a38aa35383a6f8991a";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelApiKey}` },
      })
      .then(pexelsResponse);
  }

  function submit(event) {
    event.preventDefault();
    search();
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="header">
          <h1>Dictionary</h1>
          <img src={logo} width="80" alt="" />
        </div>
        <section className="first-block">
          <h4>What word do you want to look up?</h4>
          <form onSubmit={submit}>
            <input type="search" onChange={whatKeyword} placeholder="wine" />
          </form>
          <span>i.e. music, overthinking, relax, coding</span>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
        <p className="footer">
          This project was coded by{" "}
          <a
            href="https://inspiring-marigold-f98292.netlify.app/"
            target="_blank"
            alt="my-site-link"
            rel="noreferrer"
          >
            Yelyzaveta Zyrianska
          </a>{" "}
          and is open-sourced on
          {""}{" "}
          <a
            href="https://github.com/yelyzart/dictionary-project"
            target="_blank"
            alt="git-link"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://dancing-clafoutis-356731.netlify.app/"
            target="_blank"
            alt="site-link"
            rel="noreferrer"
          >
            Netlify
          </a>
        </p>
      </div>
    );
  } else {
    return load();
  }
}
