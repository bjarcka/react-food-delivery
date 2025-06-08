import { Counter } from "../counter/counter";
import { useCounter } from "../counter/use-counter";

export const Dish = ({ name, price, ingredients }) => {
  const { value, increment, decrement } = useCounter(0);
  if (!name) {
    return null;
  }
  return (
    <div className="dish">
      <h4>{name}</h4>
      <div className="dish-price">{price} €</div>
      <Counter increment={increment} decrement={decrement} value={value} />
      <div>
        {ingredients.map((ingredient) => {
          <span key={ingredient}>{ingredient} </span>;
        })}
      </div>
    </div>
  );
};
