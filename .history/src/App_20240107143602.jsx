import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import tailwindLogo from "./assets/tailwind.png";
import "./App.css";
import { animateScroll as scroll } from "react-scroll";



function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Scroll to top when the component mounts
    scroll.scrollToTop();
  }, []);

  return (
    <div id="app">
      <div className="bg-slate-800 flex justify-between ">
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
        <h1 className="text-6xl p-4 text-center my-4 border-2 bg-[hsl(10,100%,27%)]">
          {count}
        </h1>
        <div className="flex  justify-center align-center gap-4 border-1">
          <button
            onClick={() => setCount((count) => count - 1)}
            className="w-28 bg-[rgba(255,255,0,0.9)] border-red-700 "
          >
            <img
              src="https://img.icons8.com/ios/32/minus.png"
              alt="minus"
              className="mx-auto text-red-400"
            />
          </button>
          <button
            onClick={() => setCount((count) => count + 1)}
            className="w-28 text-[#f0f0f0] bg-[rgba(255,255,0,0.9)] border-2 border-red-700"
          >
            <img
              src="https://img.icons8.com/ios/32/plus.png"
              alt="plus"
              className="mx-auto"
            />
          </button>
        </div>
        <p>react counter with useState</p>
      </div>
      <div className="flex-col items-center justify-center">
      <p className="">
        Click on the Vite, React and Tailwind logos to learn more
      </p>
      <p className="">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, dolorum quam placeat autem veritatis explicabo distinctio nobis error sed possimus magni eos ad quisquam minima totam! Assumenda maxime tenetur excepturi molestias atque architecto, provident tempora dolorem minima quaerat corporis ab praesentium nemo, tempore, non commodi in laudantium minus vero esse!
      </p>
      <p className="">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, dolorum quam placeat autem veritatis explicabo distinctio nobis error sed possimus magni eos ad quisquam minima totam! Assumenda maxime tenetur excepturi molestias atque architecto, provident tempora dolorem minima quaerat corporis ab praesentium nemo, tempore, non commodi in laudantium minus vero esse!
      </p>
      <p className="">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, dolorum quam placeat autem veritatis explicabo distinctio nobis error sed possimus magni eos ad quisquam minima totam! Assumenda maxime tenetur excepturi molestias atque architecto, provident tempora dolorem minima quaerat corporis ab praesentium nemo, tempore, non commodi in laudantium minus vero esse!
      </p>
      <p className="">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, dolorum quam placeat autem veritatis explicabo distinctio nobis error sed possimus magni eos ad quisquam minima totam! Assumenda maxime tenetur excepturi molestias atque architecto, provident tempora dolorem minima quaerat corporis ab praesentium nemo, tempore, non commodi in laudantium minus vero esse!
      </p>
      <p className="">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, dolorum quam placeat autem veritatis explicabo distinctio nobis error sed possimus magni eos ad quisquam minima totam! Assumenda maxime tenetur excepturi molestias atque architecto, provident tempora dolorem minima quaerat corporis ab praesentium nemo, tempore, non commodi in laudantium minus vero esse!
      </p>
      <p className="">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, dolorum quam placeat autem veritatis explicabo distinctio nobis error sed possimus magni eos ad quisquam minima totam! Assumenda maxime tenetur excepturi molestias atque architecto, provident tempora dolorem minima quaerat corporis ab praesentium nemo, tempore, non commodi in laudantium minus vero esse!
      </p>
      <p className="">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, dolorum quam placeat autem veritatis explicabo distinctio nobis error sed possimus magni eos ad quisquam minima totam! Assumenda maxime tenetur excepturi molestias atque architecto, provident tempora dolorem minima quaerat corporis ab praesentium nemo, tempore, non commodi in laudantium minus vero esse!
      </p>
      <p className="">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, dolorum quam placeat autem veritatis explicabo distinctio nobis error sed possimus magni eos ad quisquam minima totam! Assumenda maxime tenetur excepturi molestias atque architecto, provident tempora dolorem minima quaerat corporis ab praesentium nemo, tempore, non commodi in laudantium minus vero esse!
      </p>
      <p className="">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, dolorum quam placeat autem veritatis explicabo distinctio nobis error sed possimus magni eos ad quisquam minima totam! Assumenda maxime tenetur excepturi molestias atque architecto, provident tempora dolorem minima quaerat corporis ab praesentium nemo, tempore, non commodi in laudantium minus vero esse!
      </p>
      <p className="">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, dolorum quam placeat autem veritatis explicabo distinctio nobis error sed possimus magni eos ad quisquam minima totam! Assumenda maxime tenetur excepturi molestias atque architecto, provident tempora dolorem minima quaerat corporis ab praesentium nemo, tempore, non commodi in laudantium minus vero esse!
      </p>
      </div>
      </div>
  );
}

export default App;