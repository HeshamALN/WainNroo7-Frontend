import { decorate, observable } from "mobx";
import { instance } from "./instance";

//images
import codedimg from "../assets/images/coded.jpg";

class DifferenceStore {
  loading = true;
  diffcounter = 0;
  differences = [];

  fetchAllDifferences = async () => {
    try {
      const res = await instance.get("/diffs/");
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
differenceStore.fetchAllDifferences();
export default differenceStore;
