import { decorate, observable } from "mobx";
import { instance } from "./instance";

class ListStore {
  loading = true;

  places = [
    {
      id: "1",
      name: "القصر الاحمر",
      xcoordinate: 190,
      ycoordinate: 360,
      trivia: "1",
      difference: "1",
      riddles: "1"
    },
    {
      id: "2",
      name: "المتحف البحري",
      xcoordinate: 280,
      ycoordinate: 365,
      trivia: "2",
      difference: "2",
      riddles: "2"
    },
    {
      id: "3",
      name: "متحف شهداء القرين",
      xcoordinate: 310,
      ycoordinate: 450,
      trivia: "3",
      difference: "3",
      riddles: "3"
    },
    {
      id: "4",
      name: "بيت العثمان",
      xcoordinate: 290,
      ycoordinate: 410,
      trivia: "4",
      difference: "4",
      riddles: "4"
    },
    {
      id: "5",
      name: "البحيرة الزرقاء",
      xcoordinate: 210,
      ycoordinate: 120,
      trivia: "5",
      difference: "5",
      riddles: "5"
    },
    {
      id: "6",
      name: "CODED",
      xcoordinate: 260,
      ycoordinate: 370,
      trivia: "6",
      difference: "6",
      riddles: "6"
    }
  ];

  fetchAllPlaces = async () => {
    try {
      const res = await instance.get("/api/");
      const places = res.data;
      this.places = places;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
}

decorate(ListStore, {
  places: observable,
  loading: observable
});

const listStore = new ListStore();
// listStore.fetchAllPlaces();
export default listStore;
