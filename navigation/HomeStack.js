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
import Trivia from "../components/Trivia";
import RiddlePage from "../components/Riddle";

const HomeStack = createStackNavigator(
  {
    List: ListPage,
    Riddle: RiddlePage,
    Trivia: Trivia,
    Signup: Signup,
    FirstQuestion: FirstQuestion,
    ProfileScreen: ProfileScreen,
    Login: Login,
    LandingPageScreen: LandingPageScreen,
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
