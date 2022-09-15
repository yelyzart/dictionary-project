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
            <ul>
              <li>
                {definition.definition} <br />
                <em>{definition.example}</em>
              </li>
            </ul>
            <Synonyms synonyms={definition.definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
