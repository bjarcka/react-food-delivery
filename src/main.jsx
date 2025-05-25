import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { restaurants } from "./data/mock";

createRoot(document.getElementById("root")).render(
  <ul>
    {restaurants.map((restaurant) => (
      <li key={restaurant.id}>
        <h2>{restaurant.name}</h2>
        <h3>Menu</h3>
        <ul>
          {restaurant.menu?.map((dish) => (
            <li key={dish.id}>{dish.name}</li>
          ))}
        </ul>
        <h3>Reviews</h3>
        <ul>
          {restaurant.reviews?.map((review) => (
            <li key={review.id}>{review.text}</li>
          ))}
        </ul>
      </li>
    ))}
  </ul>
);
