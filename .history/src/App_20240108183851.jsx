import React from "react";
import PropTypes from "prop-types";

import Hero from "/Users/randydevries/Code/javaScript/React/zero-project/src/components/Hero.jsx";
import "./App.css";

function App() {
  
  return <Hero />
}

App.propTypes = {
  greeting: PropTypes.string,
  subject: PropTypes.string,
};

export default App;
