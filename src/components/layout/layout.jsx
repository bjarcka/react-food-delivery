import { RestaurantsPage } from "../restaurants-page/restaurants-page";
import { restaurants } from "../../data/mock";

export const Layout = ({ children }) => {
  return (
    <>
      <header>
        APP HEADER <hr></hr>
      </header>
      <main>{children}</main>
      <footer>
        <hr></hr>APP FOOTER
      </footer>
    </>
  );
};
