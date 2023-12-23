import { Subject } from "../../utils/Subject";

const initialValue = {
  counter: 0,
};

export const counterSlice = new Subject(initialValue);
