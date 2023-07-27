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
// In React, "hooks" are functions that allow you to use state and other React features in functional components.
//   Prior to the introduction of hooks in React 16.8, stateful logic could only be used in class components. Hooks
//   provide a more straightforward and concise way to work with state and other React features in functional components,
//     promoting code reusability and making it easier to manage the component's state and lifecycle.

