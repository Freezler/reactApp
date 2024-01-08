import React from "react";
import PropTypes from "prop-types";

import Hero from "./components/Hero";
import "./App.css";

function App(props) {
  console.log(props);
  return (
    <Router>
      <header className="App-header flex">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </header>
      <Hero />
    </Router>
  );
}

App.propTypes = {
  greeting: PropTypes.string,
  subject: PropTypes.string,
};

export default App;