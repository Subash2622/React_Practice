# React_Practice

import "./App.css";
import Header from "./Header";
import { useState } from "react";

function App() {
  const [data, setData] = useState(null);
  function getdata(val) {
    console.warn(val.target.value);
    setData(val.target.value);
  }
  return (
    <>
      <h4>Hy</h4>
      <h1>Hello EDevlop</h1>

      <h2>Typing Test </h2>
      <h3>{data}</h3>
      <input type="text" onChange={getdata} />

      <Header />
    </>
  );
}

export default App;
///////////////////////////////////
// import { useState } from "react";
// function Header() {
//   const [data, setData] = useState("Subash");
//   function updateData() {
//     setData("Subash Chandra Sahoo");
//   }
//   return (
//     <>
//       <h1>{data}</h1>
//       <button onClick={updateData}>Click Me</button>
//     </>
//   );
// }
// export default Header;
//===============================
// function Header(props) {
//   return <h1>Hyy Subash {props.name}</h1>;
//   console.log(props);
// }
// export default Header;
////////////////////////////////
// function Header(val) {
//   function getdata() {
//     console.warn(val.target);
//   }
//   return (
//     <>
//       <h2>Get Input Box Value </h2>
//       <input type="text" onChange={getdata} />
//     </>
//   );
// }
// export default Header;
