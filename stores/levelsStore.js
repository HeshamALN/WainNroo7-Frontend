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
      x: 230,
      y: 310,
      score: "100"
    },
    {
      id: "2",
      name: "riddle",
      x: 70,
      y: 420,
      score: "150"
    },
    {
      id: "3",
      name: "trivia",
      x: 85,
      y: 140,
      score: "200"
    }
  ];
}

const levelsStore = new LevelsStore();
export default levelsStore;
