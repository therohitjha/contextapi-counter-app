import React, { useReducer, createContext } from "react";
import "./styles.css";
import Counter from "./Counter";
export const contextCounter = createContext();
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "INCREAMENT":
      return state + 1;
    case "RESET":
      return initialState;
    case "DECREAMENT":
      return state - 1;
    default:
      return state;
  }
};
export default function App() {
  const [counter, dispatch] = useReducer(reducer, initialState);
  return (
    <>
    <contextCounter.Provider value={{counter,dispatch}}>
      <Counter />
    </contextCounter.Provider>
    </>
  );
}
