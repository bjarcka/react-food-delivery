import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { restaurants } from "./data/mock";

createRoot(document.getElementById("root")).render(
  <ul>
    {restaurants.map(({ id, name, menu, reviews }) => (
      <li key={id}>
        <h2>{name}</h2>
        <h3>Menu</h3>
        <ul>
          {menu?.map((dish) => (
            <li key={dish.id}>{dish.name}</li>
          ))}
        </ul>
        <h3>Reviews</h3>
        <ul>
          {reviews?.map((review) => (
            <li key={review.id}>{review.text}</li>
          ))}
        </ul>
      </li>
    ))}
  </ul>
);
