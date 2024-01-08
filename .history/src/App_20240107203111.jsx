import Hero from "./components/hero";
function App(props) {
  console.log(props);
  return (
    <>
      <Hero />
      <header className="App-header">
        <h1>Hello {props.subject}!</h1>
      </header>
    </>
  );
}

export default App;
