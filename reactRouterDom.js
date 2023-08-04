import "./App.css";
import "./style.css";
import style from "./custom.modoule.css";
import { Button } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <h1 className="primary">Hello World 1</h1>
      <h1 style={{ color: "red", backgroundColor: "yellow" }}>
        Hello World 2{" "}
      </h1>
      <h1 className={style.success}>Hello World 3</h1>
      <Button>Click Hello</Button>
    </div>
  );
}

export default App;
//Home Component
import React from "react";

function Home() {
  return <h1>Home</h1>;
}

export default Home;
//About Component
import React from "react";

function About() {
  return <h1>About</h1>;
}

export default About;
