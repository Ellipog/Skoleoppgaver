import "../App.css";
import { useState } from "react";

function KursInfo(props) {
  const data = props.data[0];
  const year = data.Dato.toString().substring(0, 4);
  const month = data.Dato.toString().substring(4, 6);
  const day = data.Dato.toString().substring(6, 8);

  const [registration, setRegistration] = useState({
    Fornavn: "",
    Etternavn: "",
    Adresse: "",
    Postnummer: "",
    Poststed: "",
  });

  const handleInputChange = (e) => {
    setRegistration({
      ...registration,
      [e.target.name]: e.target.value,
    });
  };

  function handleRegistration() {
    if (registration.Fornavn && registration.Etternavn && registration.Adresse && registration.Postnummer && registration.Poststed) {
      fetch("http://localhost:3001/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ registration }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  return (
    <div className="mainInfo">
      <div className="kursInfoBox">
        <div className="kursInfoTitlesBox">
          <div className="kursTitle">{data.KursNavn}</div>
          <div className="kursDate">Dato: {day + "/" + month + "/" + year}</div>
          <div className="kursDate">Oppmøte klokkeslett: {data.Tid}</div>
          <div className="kursDate">Adresse: {data.Adresse + " " + data.Postnummer + " " + data.Poststed}</div>
        </div>
      </div>
      <div className="registrationBox">
        <h2>Fyll ut påmeldingsskjema</h2>
        <div className="inputElement">
          <p>Fornavn: </p>
          <input className="input" placeholder="Feks. Elliot" name="Fornavn" value={registration.Fornavn} onChange={handleInputChange}></input>
        </div>
        <div className="inputElement">
          <p>Etternavn: </p>
          <input className="input" placeholder="Feks. Aaen" name="Etternavn" value={registration.Etternavn} onChange={handleInputChange}></input>
        </div>
        <div className="inputElement">
          <p>Adresse: </p>
          <input className="input" placeholder="Feks. Oslo Gate 57" name="Adresse" value={registration.Adresse} onChange={handleInputChange}></input>
        </div>
        <div className="inputElement">
          <p>Postnummer: </p>
          <input className="input" placeholder="Feks. 1400" name="Postnummer" value={registration.Postnummer} onChange={handleInputChange}></input>
        </div>
        <div className="inputElement">
          <p>Poststed: </p>
          <input className="input" placeholder="Feks. Ski" name="Poststed" value={registration.Poststed} onChange={handleInputChange}></input>
        </div>
        <button className="button registrationButton" onClick={handleRegistration}>
          Meld deg på
        </button>
      </div>
    </div>
  );
}

export default KursInfo;
