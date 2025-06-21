import { Review } from "../review/review";
import { Dish } from "../dish/dish";
import { ReviewForm } from "../review-form/review-form";
import styles from "./restaurant.module.css";
import { Reviews } from "../reviews/reviews";

export const Restaurant = ({ name, menu, reviews }) => {
  return (
    <div className={styles.restaurant}>
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
      {reviews.length ? <Reviews reviews={reviews} /> : "no reviews"}
      <ReviewForm />
    </div>
  );
};
