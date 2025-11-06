import { useState } from "react";
import Hijo1 from "./components/Hijo1";
import Hijo2 from "./components/Hijo2";

const App = () => {
  // const [getter, setter] = useState(valorInicial)
  //parte del trabajo del setState es indicar a React que debe actualizar la interfaz]
  //cada vez que haya un cambio de estado (y también de props) el componente se volverá a renderizar
  const [contador, setContador] = useState(0);

  const aumentar = () => {
    console.log("Hola desde aumentar!");
    // contador++; //no funciona al menos no para actualizar la interfaz
    setContador(contador + 1);
  }

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <hr />
      {/* contador es un prop que tiene de valor el estado contador */}
      <Hijo1 contador={contador} text="hola" />
      <Hijo2 contador={contador} accion={aumentar}></Hijo2>
      {/* la manera de manejar Eventos es con el attributo onEvento={funcion} */}
      <button onClick={aumentar}>Aumentar!</button>
    </div>
  )
}

export default App

/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
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
*/
