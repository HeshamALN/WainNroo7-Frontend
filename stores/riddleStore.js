import { decorate, observable } from "mobx";
import { instance } from "./instance";

class RidleStore {
  loading = true;
  diffcounter = 0;
  riddles = [];

  fetchAllRiddles = async () => {
    try {
      const res = await instance.get("/api/");
      const riddles = res.data;
      this.differences = riddles;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
}

decorate(RidleStore, {
  riddles: observable,
  diffcounter: observable,
  loading: observable
});

const ridleStore = new RidleStore();
export default ridleStore;
