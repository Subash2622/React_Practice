import logo from './logo.svg';
import './App.css';
import User from './User'
import Student from './Student'
function App() {
 
  function getData() {
    alert("Hello from app component")
  }
  return (
    <div className="App">
     <User  data={getData} />
     <Student data={getData} />
    </div>
  );
}

export default App;

//User Component
// function User(props) {
    
//     return(
//         <div>
//             <h1>User Component</h1>
//             <button onClick={props.data}>Call Function</button>
//         </div>
//     )
// }


// export default User;
//Student Component
// function Student(props) {
    
//     return(
//         <div>
//             <h1>Student Component</h1>
//             <button onClick={props.data}>Call Function</button>
//         </div>
//     )
// }


// export default Student;
