import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import tailwindLogo from "./assets/tailwind.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-slate-800 flex justify-between">
        <a href="https://vitejs.dev" target="blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://tailwindcss.com" target="blank">
          <img src={tailwindLogo} className="logo tailwind" alt="React logo" />
        </a>
      </div>
      <h1>Vite React Tailwind</h1>
      <div className="flex-col">
        <h1 className="text-6xl p-4 my-4 border-2 bg-[hsl(10,100%,27%)]">
          {count}
        </h1>
        <div className="flex  justify-center align-center gap-4 border-1">
          <button
            onClick={() => setCount((count) => count - 1)}
            className="w-28 bg-[rgba(255,0,0,0.5)] text-[#ffffff] border-2 border-red-700"
          >
            <img
              src="https://img.icons8.com/ios/20/minus.png"
              alt="minus"
              className="mx-auto text-red-400"
            />
          </button>
          <button
            onClick={() => setCount((count) => count + 1)}
            className="w-28 text-[#f0f0f0] bg-[#f0f0f0] border-2 border-red-700"
          >
            <img
              src="https://img.icons8.com/ios/20/plus.png"
              alt="plus"
              className="mx-auto"
            />
          </button>
        </div>
        <p>react counter with useState</p>
      </div>
      <p className="">
        Click on the Vite, React and Tailwind logos to learn more
      </p>
    </>
  );
}

export default App;
