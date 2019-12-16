import { createStackNavigator } from "react-navigation-stack";

// Components
import Login from "../components/Login/index";

const AuthStack = createStackNavigator({
  Login: Login
});

export default AuthStack;
