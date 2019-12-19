import { createStackNavigator } from "react-navigation-stack";

// Components
import ListPage from "../components/ListPage";
import LevelsPage from "../components/LevelsPage";
import Trivia from "../components/Trivia";

const HomeStack = createStackNavigator(
  {
    Trivia: Trivia,
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
