import React from 'react';
import hero from "../assets/react.svg";
const Hero = () => {
  return (
    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col font-[system-ui]">
      <img
        className="lg:w-1/6 md:w-2/6 w-4/6 mb-10 object-cover object-center animate-spinSlow"
        alt="hero"
        src={hero}
      />
      <div className="text-center lg:w-5/12 w-full">
        <h1 className="my-4 text-5xl font-bold leading-tight text-pretty">
          My first react app
        </h1>
        <p className="text-2xl mb-8">
          built with <a href="https://vitejs.dev">Vite</a> and{" "}
          <a href="https://tailwindcss.com/">Tailwind</a>
        </p>
        <div className="flex justify-center mx-auto">
          <button className="hover:underline bg-white text-gray-800 font-bold rounded-full py-4 px-8">
            View Projects
          </button>
          <button className="ml-4 hover:underline bg-white text-gray-800 font-bold rounded-full py-3 px-8">
            Plugins
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
