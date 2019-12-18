import { createStackNavigator } from "react-navigation-stack";

// Components
import Login from "../components/Login/index";
import Signup from "../components/Signup/index";
import LandingPageScreen from "../components/Landing Page/index";
import FirstQuestion from "../components/FirstQuestion/index";

const AuthStack = createStackNavigator({
  LandingPageScreen: LandingPageScreen,
  FirstQuestion: FirstQuestion,
  Login: Login,
  Signup: Signup
});

export default AuthStack;
