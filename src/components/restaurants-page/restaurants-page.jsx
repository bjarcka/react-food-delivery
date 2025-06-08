import { Restaurant } from "../restaurant/restaurant";
import { useState } from "react";
import { restaurants } from "../../data/mock";
import { ReviewForm } from "../review-form/review-form";

export const RestaurantsPage = () => {
  const [activeRestaurantId, setActiveId] = useState(restaurants[0].id);
  const activeRestaurant = restaurants.find(
    ({ id }) => activeRestaurantId === id
  );

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
      {activeRestaurant && (
        <Restaurant
          id={activeRestaurant.id}
          name={activeRestaurant.name}
          menu={activeRestaurant.menu}
          reviews={activeRestaurant.reviews}
          key={activeRestaurant.id}
        />
      )}
    </div>
  );
};
