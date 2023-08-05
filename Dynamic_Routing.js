import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Page404 from "./component/Page404";
import User from "./component/User";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Page404 />} />
          <Route path="/user/:name" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
//Components
//About Component
import { Link } from "react-router-dom";
function About() {
  return (
    <>
      <h1>About</h1>
      <h2>This is About Page</h2>
      <p>
        An "About" page is a crucial element of any website or application. It
        provides an opportunity to connect with your audience on a personal
        level and convey essential information about your organization, brand,
        or project. Here are some of the benefits and good things about a
        well-crafted "About" page:
      </p>
      <Link to="/about">Go to About</Link>{" "}
      <li>
        <Link to="/user/anil">Anil</Link>
      </li>
      <li>
        <Link to="/user/peter">Anil</Link>
      </li>
    </>
  );
}

export default About;
//Home Component
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <h2>This is Home Page</h2>
      <p>
        The home page is often the first thing visitors see when they arrive at
        your site or app. A visually appealing and user-friendly home page can
        leave a positive and lasting impression on users, encouraging them to
        explore further.
      </p>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

export default Home;
//Navbar Component
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <ul>
        <li>
          {/* <a href="/about">About</a> */}
          <Link to="/about">About</Link>{" "}
        </li>
        <li>
          <Link to="/">Home</Link>
          {/* <a href="/">Home</a> */}
        </li>
      </ul>
    </>
  );
}

export default Navbar;
//Page 404 Component
import React from "react";

function Page404() {
  return <div>Page404</div>;
}

export default Page404;
//User
import React from "react";
import { useParams } from "react-router-dom";
function User() {
  const params = useParams();
  const { name } = params;
  return (
    <div>
      <h1>This is {name}'s page</h1>
    </div>
  );
}

export default User;
