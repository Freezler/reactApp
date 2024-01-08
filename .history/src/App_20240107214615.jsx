import Hero from "./components/hero";

function App(props) {
  console.log(props);
  return (
    <>
      <header className="App-header flex">
  
        <h1>{props.greeting} {props.subject}!</h1>
      </header>
      <Hero />
    </>
  );
}
App.propTypes = {
  greeting: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired
};

export default App;
