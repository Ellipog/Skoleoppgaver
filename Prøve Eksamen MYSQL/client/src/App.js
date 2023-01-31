import "./App.css";
import { useEffect, useState } from "react";
import Kurs from "./components/Kurs.js";
import KursInfo from "./components/KursInfo.js";

function App() {
  const [kurs, setKurs] = useState([]);
  const [page, setPage] = useState("home");
  const [activeKurs, setActiveKurs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/fetchdb")
      .then((res) => res.json())
      .then((data) => setKurs(data.data));
  }, []);

  useEffect(() => console.log(kurs), [kurs]);

  if (page === "home") {
    return (
      <div className="main">
        <h1 className="mainTitle">Hansen Utvikling & RAM</h1>
        <h2 className="mainKursTitle">Kurs tiljengelige nå</h2>
        {kurs.map((kurs) => {
          return <Kurs key={kurs.KursID} id={kurs.KursID} title={kurs.KursNavn} date={kurs.Dato} page={setPage} kurs={setActiveKurs} />;
        })}
      </div>
    );
  }
  if (page === "kursInfo") {
    let cKurs = kurs.filter((kurs) => kurs.KursID === activeKurs);
    return (
      <div className="main">
        <h1 className="mainTitle">Hansen Utvikling & RAM</h1>
        <KursInfo key={cKurs.KursID} data={cKurs} page={setPage} kurs={setActiveKurs} />
        <button className="backButton button" onClick={() => setPage("home")}>
          Gå tilbake
        </button>
      </div>
    );
  }
}

export default App;
