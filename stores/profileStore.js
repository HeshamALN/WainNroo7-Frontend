import { decorate, observable, computed } from "mobx";
import { instance } from "./instance";

class ProfileStore {
  loading = true;

  profile = {
    first_name: "farah",
    last_name: "alkhaldi",
    username: "farah123",
    email: "farah123@outlook.com",
    gender: "Female",
    birth_day: "4/12/1994",
    total_score: 0
  };

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
  loading: observable
});

const profileStore = new ProfileStore();
export default profileStore;
