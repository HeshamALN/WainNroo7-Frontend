import { decorate, observable } from "mobx";
import { AsyncStorage } from "react-native";
import jwt_decode from "jwt-decode";
import { instance } from "./instance";

class AuthStore {
  user = null;

  setUser = async token => {
    if (token) {
      await AsyncStorage.setItem("myToken", token);
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;

      this.user = jwt_decode(token);
    } else {
      await AsyncStorage.removeItem("myToken");
      delete instance.defaults.headers.common.Authorization;
      this.user = null;
    }
    console.log(this.user);
  };

  login = async (userData, navigation) => {
    try {
      const res = await instance.post("/login/", userData);
      const user = res.data;
      await this.setUser(user.access);
      navigation.navigate("List");
    } catch (err) {
      // console.error(err);
      alert("invalid");
    }
  };

  signup = async (userData, navigation) => {
    try {
      const res = await instance.post("/register/", userData);
      this.login(userData, navigation);
      navigation.navigate("List");
    } catch (err) {
      // console.error(err);
      alert("invalid");
    }
  };

  logout = async navigation => {
    await this.setUser();
    navigation.navigate("Login");
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");

    if (token) {
      const currentTime = Date.now() / 1000;
      const user = jwt_decode(token);
      if (user.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.setUser();
      }
    }
  };
}

decorate(AuthStore, {
  user: observable
});

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
