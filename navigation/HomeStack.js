import { createStackNavigator } from "react-navigation-stack";

// Components
import ListPage from "../components/ListPage";

const HomeStack = createStackNavigator(
  {
    List: ListPage
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
