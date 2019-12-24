import { createDrawerNavigator } from "react-navigation-drawer";

//Components
import ProfileScreen from "../components/Profile";
import ListPage from "../components/ListPage";
import SideMenu from "../components/CustomDrawer";

const DrawerNav = createDrawerNavigator(
  {
    Profile: ProfileScreen,
    List: ListPage
  },
  {
    contentComponent: SideMenu,
    drawerWidth: 200
  }
);
export default DrawerNav;
