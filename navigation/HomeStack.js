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
import WinGame from "../components/WinGame";
import Timeout from "../components/Timeout";
import DrawerNav from "../components/CustomDrawer";

const HomeStack = createStackNavigator(
  {
    List: ListPage,
    Levels: LevelsPage,
    Difference: DifferencePage,
    Trivia: Trivia,
    Riddle: RiddlePage,
    WinGame: WinGame,
    Timeout: Timeout,
    DrawerNav: DrawerNav
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default HomeStack;
