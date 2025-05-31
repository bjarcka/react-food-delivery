import { Counter } from "../counter/counter";

export const Dish = ({ name, price, ingredients }) => {
  return (
    <div className="dish">
      <h4>{name}</h4>
      <div className="dish-price">{price} €</div>
      <Counter />
      <div>
        {ingredients.map((ingredient) => {
          <span key={ingredient}>{ingredient} </span>;
        })}
      </div>
    </div>
  );
};
