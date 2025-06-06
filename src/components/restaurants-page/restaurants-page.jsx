import { Restaurant } from "../restaurant/restaurant";
import { useState } from "react";
import { restaurants } from "../../data/mock";
import { ReviewForm } from "../review-form/review-form";

export const RestaurantsPage = () => {
  const [activeId, setActiveId] = useState(restaurants[0].id);
  const restaurant = restaurants.find(({ id }) => activeId === id);

  return (
    <div>
      <ul className="tabs-list">
        {restaurants.map(({ name, id }) => {
          return (
            <button
              key={id}
              onClick={() => {
                setActiveId(id);
              }}
            >
              {name}
            </button>
          );
        })}
      </ul>
      <hr></hr>
<<<<<<< HEAD
      <ul>
        {restaurants.map(
          ({ id, name, menu, reviews }) =>
            activeId === id && (
              <Restaurant
                id={id}
                name={name}
                menu={menu}
                reviews={reviews}
                key={id}
              />
            )
        )}
      </ul>
      <ReviewForm />
=======
      <div>
        <Restaurant
          id={restaurant.id}
          name={restaurant.name}
          menu={restaurant.menu}
          reviews={restaurant.reviews}
          key={restaurant.id}
        />
      </div>
>>>>>>> main
    </div>
  );
};
