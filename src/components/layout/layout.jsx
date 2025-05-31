import { RestaurantsPage } from "../restaurants-page/restaurants-page";
import { restaurants } from "../../data/mock";

export const Layout = () => {
  return (
    <>
      <header>
        APP HEADER <hr></hr>
      </header>
      <main>
        <RestaurantsPage restaurants={restaurants} />
      </main>
      <footer>
        <hr></hr>APP FOOTER
      </footer>
    </>
  );
};
