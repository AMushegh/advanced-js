import React, { useState } from "react";

import store from "./store";
import useSelector from "./hooks/useSelector";
import { Header } from "./components/Header";

export const App = () => {
  const { counter } = useSelector("counterSlice");
  const { token } = useSelector("userSlice");
  const [isVisible, setIsVisible] = useState(false);

  const clickHandler = () => {
    store.counterSlice.next({
      ...store.counterSlice.value,
      counter: store.counterSlice.value.counter + 1,
    });
  };

  return (
    <div>
      {isVisible && <Header />}
      {counter}
      {token}
      <button onClick={clickHandler}>increment</button>
      <button onClick={() => setIsVisible((prev) => !prev)}>toggle</button>
    </div>
  );
};
