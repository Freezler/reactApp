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
      
      <div className="flex-col mx-[auto]">
      <p className="">
        Click on the Vite, React and Tailwind logos to learn more
      </p>
      <p className="w-[">
       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem minus omnis ea veniam at molestiae maiores impedit earum, fugit, dolor laborum dolore dicta. In voluptatum dolorem quas deserunt sed enim ex? Harum molestiae corporis porro ducimus minus quisquam accusantium voluptatum adipisci autem, repellat repellendus quaerat perspiciatis exercitationem iure pariatur quidem eaque illum? Amet, ducimus ipsam natus eligendi sapiente iste. Beatae expedita consectetur tempora numquam, consequatur debitis repellat, adipisci quae pariatur cum soluta architecto. Similique odio voluptate dolorem enim. Dolores ducimus adipisci iusto repellendus accusamus, impedit ad totam, eveniet optio consequatur harum quo laudantium nostrum aperiam. Non voluptates dolorum illum veritatis repellat odio facere beatae tenetur explicabo animi provident adipisci sed alias itaque placeat maxime cumque, saepe similique hic ad reprehenderit eius ullam! Accusamus atque cupiditate aperiam molestiae incidunt fugiat deserunt ducimus nulla soluta, exercitationem sunt cumque alias iste reiciendis, aliquam magnam perferendis magni, ex facere est eaque distinctio non! Aliquam nisi maxime corporis. Corrupti dolor illo delectus maxime error quisquam, deserunt provident aut accusamus voluptates. Aspernatur voluptas ducimus reprehenderit doloremque, quasi cum illum enim laboriosam ab dignissimos et quia, non quis molestiae quo maiores sequi, nisi dicta! Tempore deleniti, error nostrum inventore similique laboriosam vitae adipisci reprehenderit accusantium veniam ipsum perspiciatis a ipsa, quos reiciendis exercitationem ducimus, amet distinctio odio! Consectetur cupiditate consequuntur quod error! Facilis illo, vel accusamus quod reiciendis aliquid nostrum nam. Facilis exercitationem similique necessitatibus vitae nostrum commodi ea incidunt, animi ipsum eaque placeat rem fuga alias, vero, voluptatum illum ipsa possimus optio nemo a sint repellendus numquam nisi accusamus. Quaerat, quisquam fugiat! Voluptatum et atque placeat assumenda aspernatur nemo, eveniet quae nisi laudantium aliquid tempora, necessitatibus exercitationem totam repellat est odit esse sequi illum! Repellendus, distinctio, illo cum exercitationem at est velit, aut molestias inventore deserunt beatae. Sapiente inventore nostrum similique laboriosam! Assumenda debitis ratione autem!
      </p>
      
      </div>
      </div>
      </div>
  );
}

export default App;