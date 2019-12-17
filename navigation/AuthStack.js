import { createStackNavigator } from "react-navigation-stack";

// Components
import Login from "../components/Login/index";
import Signup from "../components/Signup/index";

const AuthStack = createStackNavigator({
  Login: Login,
  Signup: Signup
});

export default AuthStack;
