import { decorate, observable } from "mobx";
import { instance } from "./instance";

class RiddleStore {
  loading = true;
  data = [
    {
      id: 1,
      lock: false,
      questions: [
        {
          question: "1. Who’s our favorite Monkey ?!",
          answers: [
            {
              answer: "Kong",
              right: false,
              score: 0.0
            },
            {
              answer: "Sasquatch",
              right: false,
              score: 0.0
            },
            {
              answer: "Poppo",
              right: true,
              score: 10.0
            }
          ]
        }
      ]
    }
  ];

  fetchAllData = async () => {
    try {
      // const res = await instance.get("/riddle/");
      const res = await instance.get("/trivia/");
      const data = res.data;
      this.data = data;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
}

decorate(RiddleStore, {
  data: observable,
  loading: observable
});

const riddleStore = new RiddleStore();
// riddleStore.fetchAllData();
export default riddleStore;
