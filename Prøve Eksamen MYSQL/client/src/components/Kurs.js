import "../App.css";

function Kurs(props) {
  const year = props.date.toString().substring(0, 4);
  const month = props.date.toString().substring(4, 6);
  const day = props.date.toString().substring(6, 8);
  return (
    <div className="kursBox">
      <div className="kursTitlesBox">
        <div className="kursTitle">{props.title}</div>
        <div className="kursDate">{day + "/" + month + "/" + year}</div>
      </div>
      <button
        className="button"
        onClick={() => {
          props.page("kursInfo");
          props.kurs(props.id);
        }}
      >
        Info om kurs
      </button>
    </div>
  );
}

export default Kurs;
