import { createStackNavigator } from "react-navigation-stack";

// Components
import ListPage from "../components/ListPage";
import LevelsPage from "../components/LevelsPage";
import Login from "../components/Login/index";
import Signup from "../components/Signup/index";
import LandingPageScreen from "../components/Landing Page/index";
import FirstQuestion from "../components/FirstQuestion/index";
import ProfileScreen from "../components/Profile/index";

const HomeStack = createStackNavigator(
  {
    ProfileScreen: ProfileScreen,

    LandingPageScreen: LandingPageScreen,
    FirstQuestion: FirstQuestion,
    Login: Login,
    Signup: Signup,
    List: ListPage,
    Levels: LevelsPage
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default HomeStack;
