import React, { useContext } from "react";
import { contextCounter } from "./App";

export default function Counter() {
  const { counter, dispatch } = useContext(contextCounter);
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => dispatch("INCREAMENT")}>Increase</button>
      <button onClick={() => dispatch("RESET")}>Reset</button>
      <button onClick={() => dispatch("DECREAMENT")}>Decrease</button>
    </>
  );
}
