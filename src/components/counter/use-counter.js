import { useState } from "react";

export const useCounter = ({ min = 0, max = 5 } = {}) => {
  const [value, setCount] = useState(min);

  const increment = () => {
    setCount(Math.min(value + 1, max));
  };
  const decrement = () => {
    setCount(Math.max(value - 1, min));
  };
  return {
    value,
    increment,
    decrement,
  };
};
