import { createAppContainer } from "react-navigation";

// import AuthStack from "./AuthStack";
// import HomeStack from "./HomeStack";
import SwitchNav from "./SwitchNav";
// const AppContainer = createAppContainer(AuthStack);
// const AppContainer = createAppContainer(HomeStack);
const AppContainer = createAppContainer(SwitchNav);

export default AppContainer;
