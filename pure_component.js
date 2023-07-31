import './App.css';
import React from 'react'
import Counter from './Counter'
class  App extends React.Component {
  constructor()
  {
    super();
    this.state={
      count:1
    }
  }
 render()
 {
  return (
    <div className="App">
     <Counter count={this.state.count} />
      <button 
      onClick={()=>{this.setState({count:this.state.count+1})}}
      >Update Count</button>
    </div>
  );
 }
}

export default App;
//New Component 
import React from 'react'
class Counter extends React.PureComponent{
    render()
    {
        console.warn("counter re-render")
        return(
            <div>
                <h1>Counter Component {this.props.count}</h1>
            </div>
        )
    }
}

export default Counter
//Notes
In React, a "pure component" (also known as a "pure function component") is a type of component that only depends on its input props and does not 
have any internal state. A pure component's output is solely determined by its input props, and it doesn't rely on any external factors or side effects.


The main characteristics of a pure component are:

Pure Functions: The component is implemented as a pure function, meaning it always produces the same output for the same input props and has no side effects.

Stateless: The component does not have any internal state managed by React (i.e., no 'this.state').

No Lifecycle Methods: Pure components do not use lifecycle methods like 'shouldComponentUpdate', as their updates are 
determined by the parent components passing new props.

Pure components are often used to optimize rendering in React applications because they can be more easily memoized, and React can skip rendering them 
if their input props haven't changed since the last render. This can lead to performance improvements by reducing unnecessary re-renders.
