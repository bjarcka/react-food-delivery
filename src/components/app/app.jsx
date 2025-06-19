import { Layout } from "../layout/layout";
import { RestaurantsPage } from "../restaurants-page/restaurants-page";
import "./reset.css";
import { ProgressBar } from "../progress-bar/progress-bar.jsx";

export const App = (props) => {
  return (
    <>
      <ProgressBar />
      <Layout>
        <RestaurantsPage />
      </Layout>
    </>
  );
};
