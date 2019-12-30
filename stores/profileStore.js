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
      console.log("el profile", this.profile);
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };

  updateTotalScore = score => {
    // instance.put(url,score)
    this.profile.total_score += score;
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
  loading: observable,
  age: observable
});

const profileStore = new ProfileStore();
export default profileStore;
