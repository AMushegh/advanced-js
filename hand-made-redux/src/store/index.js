import { counterSlice } from "./slices/counter";
import { userSlice } from "./slices/user";

class Store {
  constructor(counterSlice, userSlice) {
    this.counterSlice = counterSlice;
    this.userSlice = userSlice;
  }
}

const store = new Store(counterSlice, userSlice);

window.store = store;
export default store;
