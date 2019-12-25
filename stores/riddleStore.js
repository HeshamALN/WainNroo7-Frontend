import { decorate, observable } from "mobx";
import { instance } from "./instance";

class RidleStore {
  loading = true;
  riddcounter = 0;
  riddles = [
    {
      id: "1",
      riddle: "",
      question: "",
      answer: [],
      score: ""
    }
  ];

  fetchAllRiddles = async () => {
    try {
      const res = await instance.get("/api/");
      const riddles = res.data;
      this.riddles = riddles;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
}

decorate(RidleStore, {
  riddles: observable,
  riddcounter: observable,
  loading: observable
});

const ridleStore = new RidleStore();
export default ridleStore;
