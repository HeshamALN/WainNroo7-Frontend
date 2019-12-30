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
import Timeout from "../components/Timeout";
import WinGame from "../components/WinGame";

const HomeStack = createStackNavigator(
  {
    WinGame: WinGame,
    List: ListPage,
    ProfileScreen: ProfileScreen,
    Trivia: Trivia,
    Riddle: RiddlePage,
    Signup: Signup,
    FirstQuestion: FirstQuestion,
    Login: Login,
    LandingPageScreen: LandingPageScreen,
    Levels: LevelsPage,
    Difference: DifferencePage,
    Timeout: Timeout
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default HomeStack;
