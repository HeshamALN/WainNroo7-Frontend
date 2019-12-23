import { createStackNavigator } from "react-navigation-stack";

// Components
import ListPage from "../components/ListPage";
import LevelsPage from "../components/LevelsPage";
import DifferencePage from "../components/Difference";

const HomeStack = createStackNavigator(
  {
    List: ListPage,
    Levels: LevelsPage,
    Difference: DifferencePage
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default HomeStack;
