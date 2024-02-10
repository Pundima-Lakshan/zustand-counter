import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";
import { useCounterStore } from "./store";

function App() {
  const count = useCounterStore((state) => state.count);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>Counter Application Using Zustand</h2>
      <div className="card">
        <button>Count is {count}</button>
      </div>
      <Counter />
    </>
  );
}

export default App;
