import { createAppContainer } from "react-navigation";
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";
// const AppContainer = createAppContainer(AuthStack);
const AppContainer = createAppContainer(HomeStack);

export default AppContainer;
