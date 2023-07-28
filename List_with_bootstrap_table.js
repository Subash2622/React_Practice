import "./App.css";
import "./style.css";
import style from "./custom.modoule.css";
import { Table } from "react-bootstrap";
function App() {
  const users = [
    { name: "Subash", email: "shubu@test.com", contact: "111", age: 26 },
    { name: "Dinesh", email: "dinesh@test.com", contact: "222", age: 26 },
    { name: "Manik", email: "manik@test.com", contact: "111", age: 26 },
    { name: "govind", email: "govind@test.com", contact: "777", age: 26 },
  ];

  return (
    <div className="App">
      <h1>List With Bootstrap Table</h1>
      <Table striped variant="dark">
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Contacts</td>
            <td>Age</td>
          </tr>
          {users.map((item, i) =>
            item.age === 26 ? (
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                <td>{item.age}</td>
              </tr>
            ) : null
          )}
        </tbody>
      </Table>
    </div>
  );
}
//We use "key" because in virtual dom ame kichi condition dei show kari pariba 
export default App;
