import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <span>•{definition.definition}</span>
              <span>
                <em>{definition.example}</em>
              </span>
            </p>
            <Synonyms synonyms={definition.definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
