import { decorate, observable } from "mobx";
import { instance } from "./instance";

//images
import codedimg from "../assets/images/coded.jpg";

class DifferenceStore {
  loading = true;
  diffcounter = 0;
  differences = [
    {
      id: "1",
      img: "",
      diffs: "",
      coordinates: [],
      score: ""
    },
    {
      id: "2",
      img: "",
      diffs: "",
      coordinates: [],
      score: ""
    },
    {
      id: "3",
      img: "",
      diffs: "",
      coordinates: [],
      score: ""
    },
    {
      id: "4",
      img: "",
      diffs: "",
      coordinates: [],
      score: ""
    },
    {
      id: "5",
      img: "",
      diffs: "",
      coordinates: [],
      score: ""
    },
    {
      id: "6",
      img: codedimg,
      diffs: 5,
      coordinates: [
        {
          id: "1",
          x: 180,
          y: 335
        },
        {
          id: "2",
          x: 5,
          y: 370
        },
        {
          id: "3",
          x: 310,
          y: 480
        },
        {
          id: "4",
          x: 300,
          y: 430
        },
        {
          id: "5",
          x: 220,
          y: 400
        }
      ],
      score: 100
    }
  ];

  fetchAllDifferences = async () => {
    try {
      const res = await instance.get("/api/");
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
// differenceStore.fetchAllDifferences();
export default differenceStore;
