import Hero from "./components/hero";
function App(props) {
  console.log(props);
  return (
    <>
      <Hero />
      <h1>Hello {props.name}</h1>
    </>
  );
}

export default App;
