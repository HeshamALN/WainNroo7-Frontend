import { createStackNavigator } from "react-navigation-stack";

// Components
import ProfileScreen from "../components/Profile";
import Login from "../components/Login";
import Signup from "../components/Signup";
import LandingPageScreen from "../components/Landing Page";
import FirstQuestion from "../components/FirstQuestion";
import ListPage from "../components/ListPage";
import LevelsPage from "../components/LevelsPage";
import DifferencePage from "../components/Difference";
// import Trivia from "../components/Trivia";

const HomeStack = createStackNavigator(
  {
    ProfileScreen: ProfileScreen,
    Login: Login,
    Signup: Signup,
    // Trivia: Trivia,
    LandingPageScreen: LandingPageScreen,
    FirstQuestion: FirstQuestion,
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
