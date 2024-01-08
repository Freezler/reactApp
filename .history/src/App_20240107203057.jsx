import Hero from "./components/hero";
function App(props) {
  console.log(props);
  return (
    <>
      <Hero />
      
      <h1>Hello {props.subject}!</h1>
    </>
  );
}

export default App;
