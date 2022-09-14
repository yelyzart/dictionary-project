import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
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

  function search(event) {
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

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section className="first-block">
          <h4>What word do you want to look up?</h4>
          <form onSubmit={search}>
            <input type="search" onChange={whatKeyword} />
          </form>
          <span>i.e. paris, wine, yoga, coding</span>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    return load();
  }
}
