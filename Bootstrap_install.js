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
//First run this command
//npm install react-bootstrap bootstrap
//then import which comonent you want ex. import { Button } from "react-bootstrap";
