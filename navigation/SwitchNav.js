import { createSwitchNavigator } from "react-navigation";

// Components
import LandingPageScreen from "../components/Landing Page/index";
import Login from "../components/Login/index";
import Signup from "../components/Signup/index";
import FirstQuestion from "../components/FirstQuestion/index";
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
