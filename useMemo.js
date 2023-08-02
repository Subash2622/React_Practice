import "./App.css";
import React, { useState, useMemo } from "react";
function App() {
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(20);

  const multicountMemo = useMemo(
    function multicount() {
      console.warn("Hello");
      return 5 * count;
    },
    [count]
  );
  return (
    <div className="App">
      <h2>Usememo Hook in react</h2>
      <h2>Count : {count}</h2>
      <h2>Item : {item}</h2>
      <h2>{multicountMemo}</h2>
      <button onClick={() => setCount(count + 1)}>Update count</button>
      <button onClick={() => setItem(item * 10)}>Update item</button>
    </div>
  );
}

export default App;
