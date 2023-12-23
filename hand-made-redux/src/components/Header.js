import React from "react";
import useSelector from "../hooks/useSelector";

export const Header = () => {
  const { counter } = useSelector("counterSlice");

  return <div>Header: {counter}</div>;
};
