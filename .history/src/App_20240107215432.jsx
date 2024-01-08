import PropTypes from "prop-types";
import Hero from "./components/hero";

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
