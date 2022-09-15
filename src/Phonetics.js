import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <div>
        <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
      </div>
      <div>{props.phonetics.text}</div>
    </div>
  );
}
