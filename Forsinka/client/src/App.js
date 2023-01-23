import "./App.css";
import React, { useState, useEffect } from "react";
import Forsinkelse from "./components/Forsinkelse";

function App() {
  const [forsinkelser, setForsinkelser] = useState([]);

  async function test() {
    fetch("https://node.binders.net:25592/forsinkelser")
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

  return (
    <div className="App">
      <div className="header">
        <input className="search" type="text"></input>
      </div>{" "}
      {forsinkelser.map((forsinkelse, i) => {
        return <Forsinkelse key={i} line={forsinkelse.line} expectedTime={forsinkelse.expectedTime} aimedTime={forsinkelse.aimedTime} name={forsinkelse.name} />;
      })}{" "}
    </div>
  );
}

export default App;
