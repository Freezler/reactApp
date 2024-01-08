import hero from "./assets/react.svg";

function App() {
  return (
    <div
      className="w-screen h-screen text-white animate-fade-in"      
      style={{
        background:
          "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)",
      }}
    >
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          className="lg:w-1/6 md:w-2/6 w-4/6 mb-10 object-cover object-center"
          alt="hero"
          src={hero}
        />
        <div className="text-center lg:w-5/12 w-full">
          <h1 className="my-4 text-5xl font-bold leading-tight text-pretty">
            Turn your designs into production-ready frontend
          </h1>
          <p className="text-2xl mb-8">
            Ship products 5-10x faster with your existing design tools, tech
            stacks & workflows!
          </p>
          <div className="flex justify-center mx-auto">
            <button className="hover:underline bg-white text-gray-800 font-bold rounded-full  py-4 px-8">
              View Projects
            </button>
            <button className="ml-4 hover:underline bg-white text-gray-800 font-bold rounded-full  py-4 px-8">
              Plugins
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
