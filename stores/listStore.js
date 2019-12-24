import { decorate, observable } from "mobx";
import { instance } from "./instance";

class ListStore {
  loading = true;

  places = [];

  fetchAllPlaces = async () => {
    try {
      const res = await instance.get("/maplist/");
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
listStore.fetchAllPlaces();
export default listStore;
