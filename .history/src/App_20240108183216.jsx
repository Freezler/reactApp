import React from "react";
import PropTypes from "prop-types";

import Hero from "./components/Hero";
import "./App.css";

function App(props) {
  console.log(props);
  return (
    
      
      <Hero 
  
  );
}

App.propTypes = {
  greeting: PropTypes.string,
  subject: PropTypes.string,
};

export default App;