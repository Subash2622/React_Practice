import "./App.css";
import React, { useState } from "react";
function App() {
  const [data, setData] = useState("Subash");
  return (
    <div className="App">
      <h1>Hooks in React {data}</h1>
      <button onClick={() => setData("Shibu")}>Update State</button>
    </div>
  );
}

export default App;
