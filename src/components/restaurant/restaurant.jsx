import { Review } from "../review/review";
import { Dish } from "../dish/dish";

export const Restaurant = ({ id, name, menu, reviews }) => {
  return (
    <li key={id}>
      <h2>{name}</h2>
      <h3>Menu</h3>
      <ul>
        {menu?.map((dish) => (
          <li key={dish.id}>
            <Dish
              name={dish.name}
              price={dish.price}
              ingredients={dish.ingredients}
            />
          </li>
        ))}
      </ul>
      <h3>Reviews</h3>
      <ul>
        {reviews?.map(({ id, user, text, rating }) => (
          <li key={id}>
            <Review user={user} text={text} rating={rating} />
          </li>
        ))}
      </ul>
    </li>
  );
};
