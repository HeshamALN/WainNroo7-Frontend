import { createDrawerNavigator } from "react-navigation-drawer";

//Components
import ProfileScreen from "../components/Profile";
import ListPage from "../components/ListPage";
// import Logout from "../components/Logout";

const DrawerNav = createDrawerNavigator(
  {
    ProfileScreen: ProfileScreen,
    List: ListPage
  },
  {
    defaultNavigationOptions: {}
  }
);

export default DrawerNav;
