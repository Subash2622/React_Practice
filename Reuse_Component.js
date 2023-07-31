import "./App.css";
import React from "react";
import User from "./User";
//import { Table } from "react-bootstrap";
function App() {
  const users = [
    {
      name: "Shubu",
      email: "shubu@test.com",
      address: "Bhadrak",
    },
    {
      name: "Dinesh",
      email: "Dinesh@test.com",
      address: "Bhubaneswar",
    },
    {
      name: "Saina",
      email: "Saina@test.com",
      address: "Cuttuck",
    },
    {
      name: "Sanskruti",
      email: "Sanskruti@test.com",
      address: "RoulKela",
    },
  ];
  return (
    <div className="App">
      <h1>Re Use Coponent</h1>
      <User />
      {users.map((iteam, i) => (
        <User data={iteam} />
      ))}
    </div>
  );
}

export default App;
/// New Component . User.js

// function User(props) {
//   return <h1>Reuse Component {props.data.email}</h1>;
// }
// export default User;
