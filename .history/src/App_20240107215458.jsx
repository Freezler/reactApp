import PropTypes from "prop-types";
import Hero from "./components/hero";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Events from "./pages/events";
import AnnualReport from "./pages/annual";
import Teams from "./pages/team";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";

function App(props) {
  console.log(props);
  return (
    <Router>
      <header className="App-header flex">
        <h1>
          {props.greeting} {props.subject}!
        </h1>
      </header>
      <Hero />
    </Router>
  );
}

App.propTypes = {
  greeting: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
};

export default App;
