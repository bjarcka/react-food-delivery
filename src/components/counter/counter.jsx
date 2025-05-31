import { useCounter } from "./use-counter";

export const Counter = () => {
  const { count, onIncrement, onDecrement } = useCounter();
  return (
    <div>
      <button onClick={onIncrement}>+</button>
      <span>{count}</span>
      <button onClick={onDecrement}>-</button>
    </div>
  );
};
