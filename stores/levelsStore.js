// NOTE:
// THIS STORE WILL BE DELETED ONCE THE APP DESIGN IS FINISHED
// ************************************************************************************
// ************************************************************************************
// dummy images
import riddles from "../assets/images/riddles.jpg";
import diff from "../assets/images/diff.jpg";
import trivia from "../assets/images/trivia.jpeg";

class LevelsStore {
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
}

const levelsStore = new LevelsStore();
export default levelsStore;
