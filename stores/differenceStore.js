import { decorate, observable } from "mobx";
import { instance } from "./instance";

class DifferenceStore {
  loading = true;
  diffcounter = 0;
  differences = [];

  fetchAllDifferences = async DifferenceID => {
    try {
      const res = await instance.get(`/diffs/${DifferenceID}/`);
      const differences = res.data;
      this.differences = differences;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };

  countDifferences = () => {
    this.diffcounter += 1;
    console.log(this.diffcounter);
  };
}

decorate(DifferenceStore, {
  differences: observable,
  diffcounter: observable,
  loading: observable
});

const differenceStore = new DifferenceStore();
export default differenceStore;
