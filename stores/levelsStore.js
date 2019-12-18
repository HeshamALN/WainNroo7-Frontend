import { decorate, observable } from "mobx";
import { instance } from "./instance";

// dummy images
import fls from "../assets/images/fls.jpg";
import riddles from "../assets/images/riddles.jpg";
import diff from "../assets/images/diff.jpg";
import lock from "../assets/images/Lock.png";
import trivia from "../assets/images/trivia.jpeg";

class LevelsStore {
  loading = true;

  levels = [
    {
      id: "1",
      name: "difference",
      lock: false,
      lockimg: lock,
      img: diff,
      score: "100",
      coin: fls,
      place: ""
    },
    {
      id: "2",
      name: "riddle",
      lock: true,
      lockimg: lock,
      img: riddles,
      score: "150",
      coin: fls,
      place: ""
    },
    {
      id: "3",
      name: "trivia",
      lock: true,
      lockimg: lock,
      img: trivia,
      score: "200",
      coin: fls,
      place: ""
    }
  ];

  fetchAllLevels = async () => {
    try {
      const res = await instance.get("/api/");
      const levels = res.data;
      this.levels = levels;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
}

decorate(LevelsStore, {
  levels: observable,
  loading: observable
});

const levelsStore = new LevelsStore();
// levelsStore.fetchAllLevels();
export default levelsStore;
