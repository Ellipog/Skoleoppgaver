import "./App.css";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import Forsinkelse from "./components/Forsinkelse";

function App() {
  const [forsinkelser, setForsinkelser] = useState([]);
  const [divClass, setClass] = useState("");

  async function test() {
    fetch("http://localhost:3001/forsinkelser")
      .then((res) => res.json())
      .then((data) => {
        data = data.sort((a, b) => {
          return new Date(b.aimedTime) - new Date(a.aimedTime);
        });
        setForsinkelser(data);
        console.log("Fetching");
      });
  }

  useEffect(() => {
    test();
  }, []);

  function addClass() {
    setClass("spinning");
    setTimeout(() => {
      setClass("");
    }, 400);
  }

  return (
    <div className="App">
      <div className="header">
        <input className="search" type="text"></input>
        <FontAwesomeIcon
          icon={faArrowsRotate}
          onClick={() => {
            test();
            addClass();
          }}
          className={divClass}
        ></FontAwesomeIcon>
      </div>
      {forsinkelser.map((forsinkelse, i) => {
        return <Forsinkelse key={i} line={forsinkelse.line} expectedTime={forsinkelse.expectedTime} aimedTime={forsinkelse.aimedTime} name={forsinkelse.name} />;
      })}
    </div>
  );
}

export default App;
