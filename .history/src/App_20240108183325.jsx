import React from "react";
import PropTypes from "prop-types";

import Hero from "./components/Hero.jszx";
import "./App.css";

function App(props) {
  console.log(props);
  return (
    
      
      <Hero greeting={props.greeting} subject={props.subject} />
  
  );
}

App.propTypes = {
  greeting: PropTypes.string,
  subject: PropTypes.string,
};

export default App;