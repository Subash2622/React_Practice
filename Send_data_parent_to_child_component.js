import React from 'react'
import './App.css';
import User from './User'
function App() {
  function getName(name)
  {
    alert(name)
  }
  return (
    <div className="App">
      <h1>Lifting State Up</h1>
      <User getData={getName} />
    </div>
  );
}

export default App;

//New Component- User
function User(props)
{
    const name="Subash Sahoo"
    return(
        <div>
            <h1>User Name is : </h1>
            <button onClick={()=>props.getData(name)} >Click Me</button>
        </div>
    )
}

export default User;
