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
      location: "@Location I"
    },
    {
      id: "2",
      name: "riddle",
      lock: true,
      lockimg: lock,
      img: riddles,
      score: "150",
      coin: fls,
      location: "@Location I"
    },
    {
      id: "3",
      name: "trivia",
      lock: true,
      lockimg: lock,
      img: trivia,
      score: "200",
      coin: fls,
      location: "@Location I"
    }
  ];

  fetchAllLevels = async () => {
    try {
      const res = await instance.get("/api/");
      const Levels = res.data;
      this.Levels = Levels;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
}

decorate(LevelsStore, {
  Levels: observable,
  loading: observable
});

const levelsStore = new LevelsStore();
// levelsStore.fetchAllLevels();
export default levelsStore;
