import "./App.css";
import React from "react";

function App() {
  const [status, setStatus] = React.useState(true);
  return (
    <div className="App">
      {status ? <h3>Hy</h3> : null}
      {/* <button onClick={() => setStatus(false)}>Hide</button>
      <button onClick={() => setStatus(true)}>Show</button> */}
      <button onClick={() => setStatus(!status)}>Toggle</button>
    </div>
  );
}

export default App;
