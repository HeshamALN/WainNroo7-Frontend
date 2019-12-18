import { createStackNavigator } from "react-navigation-stack";

// Components
import ListPage from "../components/ListPage";
import LevelsPage from "../components/LevelsPage";

const HomeStack = createStackNavigator(
  {
    List: ListPage,
    Levels: LevelsPage
  },
  {
    defaultNavigationOptions: {
      title: "وين نروح !!!",
      headerTintColor: "black",
      headerStyle: {
        backgroundColor: "#white"
      },
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default HomeStack;
