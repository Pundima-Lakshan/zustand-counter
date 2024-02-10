import { useCounterStore } from "./store";

const Counter = () => {
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <div className="card">
      <button onClick={decrement}>Decrement</button>
      <button onClick={incrementAsync}>Increment</button>
    </div>
  );
};

export default Counter;
