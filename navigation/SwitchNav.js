import { createSwitchNavigator } from "react-navigation";

// Components
import Login from "../components/Login/index";
import Signup from "../components/Signup/index";
import LandingPageScreen from "../components/Landing Page/index";
import FirstQuestion from "../components/FirstQuestion/index";

import DrawerNav from "./DrawerNav";

const SwitchNav = createSwitchNavigator({
  LandingPageScreen: LandingPageScreen,
  FirstQuestion: FirstQuestion,
  DrawerNav: DrawerNav,
  Login: Login,
  Signup: Signup
});

export default SwitchNav;
