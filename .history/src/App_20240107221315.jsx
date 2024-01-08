import PropTypes from "prop-types";
import Hero from "./components/hero";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import SignUp from "./pages/signup";

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