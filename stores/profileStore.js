import { decorate, observable, computed } from "mobx";
import { instance } from "./instance";

class ProfileStore {
  loading = true;

  profile = [];

  age = null;

  fetchProfile = async () => {
    try {
      const res = await instance.get("/profile/");
      this.profile = res.data;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };

  getAge = async () => {
    try {
      const res = await instance.get("/profile/");
      birthDate = res.data.birth_date;
      Age = Math.floor(new Date() - new Date(birthDate).getTime());
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
}

decorate(ProfileStore, {
  profile: observable,
  loading: observable
});

const profileStore = new ProfileStore();
export default profileStore;
