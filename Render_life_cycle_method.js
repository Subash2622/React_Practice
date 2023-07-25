import logo from './logo.svg';
import './App.css';
import React from 'react'
import User from './User'
function App() {
const [name,setName]=React.useState("Anil")

  return (
    <div className="App">
     <h1>Render Method in React</h1>
     <User />
     {/* <button onClick={()=>setName("Sidhu")}>Update Name</button> */}
    </div>
  );
}

export default App;
//User Component
// import React from 'react'
// class User extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             email: "anil@test.com"
//         }
//     }
//     render() {
//         console.warn("Render method", this.state.email)
//         return (
//             <div>
//                 <h1>User Component </h1>
//                 <button onClick={() => this.setState({ email: "sidhu@test.com" })}>Update Email</button>
//             </div>
//         )
//     }
// }

// export default User;
