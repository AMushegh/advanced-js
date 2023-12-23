import { uid } from "../helpers";

export class Subject {
  listeners = [];

  constructor(initialValue) {
    this.value = initialValue;
  }

  subscribe(listener) {
    const computedListener = {
      id: uid(),
      exec: listener,
    };
    this.listeners.push(computedListener);

    return computedListener.id;
  }

  unsubscribe(id) {
    this.listeners = this.listeners.filter((listener) => listener.id !== id);
  }

  next(value) {
    this.value = value;
    this.listeners.forEach((listener) => {
      listener.exec(value);
    });
  }
}
