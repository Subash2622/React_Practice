import "./App.css";
import "./style.css";
import style from "./custom.modoule.css";
import { Button } from "react-bootstrap";
function App() {
  //const students = ["Subash", "Dinesh", "Saina", "Sanskruti"];
  const studentDetails = [
    {
      name: "Subash",
      contact: 9994,
      email: "shubu@gmail.com",
      age: 26,
    },
    {
      name: "Dinesh",
      contact: 8658,
      email: "daku@gmail.com",
      age: 26,
    },
    {
      name: "Saina",
      contact: 6370,
      email: "saina@gmail.com",
      age: 26,
    },
  ];
  //Map function
  // students.map((iteam) => {
  //   console.log(iteam);
  // });
  // //For Loop
  // for (let i = 0; i < students.length; i++) {
  //   console.log("Hey I am ", students[i]);
  // }
  return (
    <div className="App">
      <h1>Handel Array with list</h1>
      {/* {students.map((data) => (
        <h1>I am a super star {data}</h1>
      ))} */}
      {studentDetails.map((data) => (
        <table border="1">
          <tr>
            <td border="1"> {data.name} </td>
            <td border="1">{data.contact}</td>
            <td border="1"> {data.email}</td>
            <td border="1">{data.age}</td>
          </tr>
        </table>
      ))}
    </div>
  );
}
//In return statement for loop does not support, while map support in return statement
export default App;
