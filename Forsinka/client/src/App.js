import "./App.css";
import React, { useState, useEffect } from "react";
import Forsinkelse from "./components/Forsinkelse";
import pako from 'pako';

function App() {
  const [forsinkelser, setForsinkelser] = useState([]);

  async function test() {
    fetch("https://forsinkasrv.chillcraft.co/forsinkelser", {
      method: "GET",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then((res) => res.json())
      .then((compressed) => {
        console.log("DEKAN DE")
        console.log(compressed)
        const data = pako.inflate(compressed, { to: 'JSON' });
        console.log(data)
        data = data.sort((a, b) => {
          return new Date(b.aimedTime) - new Date(a.aimedTime);
        });
        setForsinkelser(data);
      });
  }

  useEffect(() => {
    test();
  }, []);

  return (
    <div className="App">
      <div className="header">
        <input className="search" type="text" placeholder="Søk..."></input>
      </div>{" "}
      {forsinkelser.map((forsinkelse, i) => {
        return <Forsinkelse key={i} line={forsinkelse.line} expectedTime={forsinkelse.expectedTime} aimedTime={forsinkelse.aimedTime} name={forsinkelse.name} />;
      })}{" "}
    </div>
  );
}

export default App;
