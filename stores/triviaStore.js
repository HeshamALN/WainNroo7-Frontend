import { decorate, observable } from "mobx";
import { instance } from "./instance";

class TriviaStore {
  loading = true;

  data = [];

  fetchAllData = async TriviaID => {
    try {
      const res = await instance.get(`/trivia/${TriviaID}/`);
      const data = res.data;
      this.data = data;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
}

decorate(TriviaStore, {
  data: observable,
  loading: observable
});

const triviaStore = new TriviaStore();
export default triviaStore;
