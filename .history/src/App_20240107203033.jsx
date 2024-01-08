import Hero from "./components/hero";
function App(props) {
  console.log(props);
  return (
    <>
      <Hero />
      <h1>Hello {props.sub}</h1>
    </>
  );
}

export default App;
