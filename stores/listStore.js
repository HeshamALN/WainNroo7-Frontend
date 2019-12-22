import { decorate, observable } from "mobx";
import { instance } from "./instance";

class ListStore {
  loading = true;

  places = [
    {
      id: "1",
      name: "القصر الاحمر",
      lock: false,
      xcoordinate: 190,
      ycoordinate: 360
    },
    {
      id: "2",
      name: "المتحف البحري",
      lock: false,
      xcoordinate: 280,
      ycoordinate: 365
    },
    {
      id: "3",
      name: "متحف شهداء القرين",
      lock: false,
      xcoordinate: 310,
      ycoordinate: 450
    },
    {
      id: "4",
      name: "بيت العثمان",
      lock: false,
      xcoordinate: 290,
      ycoordinate: 410
    },
    {
      id: "5",
      name: "البحيرة الزرقاء",
      lock: false,
      xcoordinate: 210,
      ycoordinate: 120
    },
    {
      id: "6",
      name: "CODED",
      lock: false,
      xcoordinate: 260,
      ycoordinate: 370
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
