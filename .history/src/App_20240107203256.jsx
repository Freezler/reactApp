import Hero from "./components/hero";
import p
function App(props) {
  console.log(props);
  return (
    <>
      <header className="App-header">
        <h1>Hello {props.subject}!</h1>
      </header>
      <Hero />
    </>
  );
}

export default App;