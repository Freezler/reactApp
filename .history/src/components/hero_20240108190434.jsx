const Hero = () => {
  return (
    <div className="mx-auto flex items-center justify-center flex-col font-sans h-screen bg-gradient-to-tl from-indigo-900 via-indigo-800 to-indigo-300 w-full">
      <img
        className="w-40 md:w-60 lg:w-1/6 mb-10 object-cover animate-spinSlow"
        alt="hero"
        src={heroLogo}
      />
      <div className="text-center w-11/12 md:w-5/12">
        <h1 className="my-4 text-5xl font-bold leading-tight text-emerald-500">
          First React
        </h1>
        <p className="text-2xl mb-8 text-fuchsia-600 font-bold leading-relaxed">
          Built with <a href="https://vitejs.dev">Vite</a> and <a href="https://tailwindcss.com/">Tailwind</a>
        </p>
        <div className="flex justify-center mx-auto">
          <button type="btn" className="hover:underline bg-white text-gray-800 font-bold rounded-full py-4 px-8">
            CTA
          </button>
          <button className="ml-4 hover:underline bg-white text-gray-800 font-bold rounded-full py-3 px-8">
            CLICK
          </button>
        </div>
      </div>
    </div>
  );
};