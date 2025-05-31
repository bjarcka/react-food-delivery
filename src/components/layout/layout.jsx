import { RestaurantsPage } from "../restaurants-page/restaurants-page";
import { restaurants } from "../../data/mock";

export const Layout = () => {
  return (
    <>
      <header></header>
      <main>
        <RestaurantsPage restaurants={restaurants} />
      </main>
      <footer></footer>
    </>
  );
};
