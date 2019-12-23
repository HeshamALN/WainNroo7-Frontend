import { decorate, observable } from "mobx";
import { instance } from "./instance";

// dummy images
import riddles from "../assets/images/riddles.jpg";
import diff from "../assets/images/diff.jpg";
import trivia from "../assets/images/trivia.jpeg";

class LevelsStore {
  loading = true;

  levels = [
    {
      id: "1",
      name: "difference",
      lock: false,
      img: diff,
      score: "100"
    },
    {
      id: "2",
      name: "riddle",
      lock: true,
      img: riddles,
      score: "150"
    },
    {
      id: "3",
      name: "trivia",
      lock: true,
      img: trivia,
      score: "200"
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
