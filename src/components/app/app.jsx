import { Layout } from "../layout/layout";
import { RestaurantsPage } from "../restaurants-page/restaurants-page";
import "./reset.css";
import "./app.css";

export const App = (props) => {
  return (
    <Layout>
      <RestaurantsPage />
    </Layout>
  );
};
