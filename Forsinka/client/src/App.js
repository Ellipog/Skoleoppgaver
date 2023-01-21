import "./App.css";

function App() {
  function test() {
    console.log("Testing");
  }
  return (
    <div className="App">
      <button onClick={test()}></button>
    </div>
  );
}

export default App;
