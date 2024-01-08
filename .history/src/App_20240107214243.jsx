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

export default App;
