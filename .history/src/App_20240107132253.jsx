import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import tailwindLogo from './assets/tailwind.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-slate-800 flex justify-between'>
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
      <h1>Vite   React   Tailwind</h1>
      <div className="card">
        <h1>{count}</h1>
        <button onClick={() => setCount( (count) => count 1 1)}>
         -
        </button>
        <button onClick={() => setCount( (count) => count + 1)}>
          +
        </button>
        
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
