// In React, a Higher-Order Component (HOC) is a design pattern used to enhance the functionality and reusability of components. 
// It is not a built-in feature of React but rather a pattern that developers can utilize. HOCs are functions that take a component 
// as an input and return a new component with additional props or behavior.

The main purpose of using HOCs is to share logic between multiple components without repeating code. This pattern encourages the separation of concerns and allows for better code organization and maintainability.
import './App.css';
import React, { useRef, useState } from 'react'
function App() {
  return (
    <div className="App">
      <h1>HOC </h1>
      <HOCRed cmp={Counter} />
      <HOCGreen cmp={Counter} />
      <HOCBlue cmp={Counter} />

    </div>
  );
}
function HOCRed(props)
{
  return <h2 style={{backgroundColor:'red',width:100}}>Red<props.cmp /></h2>
}
function HOCGreen(props)
{
  return <h2 style={{backgroundColor:'green',width:100}}>Grren<props.cmp /></h2>
}
function HOCBlue(props)
{
  return <h2 style={{backgroundColor:'blue',width:100}}>blue <props.cmp /></h2>
}
function Counter()
{
  const [count,setCount]=useState(0)
  return<div>
    <h3>{count}</h3>
    <button onClick={()=>setCount(count+1)}>Update</button>
  </div>
}

export default App;
