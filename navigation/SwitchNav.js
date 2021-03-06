import { createSwitchNavigator } from "react-navigation";

// Components
import LandingPageScreen from "../components/Landing Page";
import Login from "../components/Login";
import Signup from "../components/Signup";
import FirstQuestion from "../components/FirstQuestion";
import HomeStack from "./HomeStack";
import DrawerNav from "./DrawerNav";

const SwitchNav = createSwitchNavigator(
  {
    LandingPageScreen: LandingPageScreen,
    FirstQuestion: FirstQuestion,
    Login: Login,
    Signup: Signup,
    DrawerNav: DrawerNav,
    HomeStack: HomeStack
  },

  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default SwitchNav;
