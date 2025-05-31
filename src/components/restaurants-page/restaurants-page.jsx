import { Restaurant } from "../restaurant/restaurant";
import { useState } from "react";

export const RestaurantsPage = ({ restaurants }) => {
  const [activeId, setActiveId] = useState(restaurants[0].id);

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
    </div>
  );
};
