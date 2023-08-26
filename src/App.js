import React from "react";
import "./App.css";
import Count from "./count";
import Btn from "./Btn";
import ModeToggler from "./ModeToggler";
import Child from "./Child";
import InputComponent from "./InputComponent";

function App() {
  const date = new Date();
  return (
    <div className="App">
      <Count />
      <Btn />
      <ModeToggler/>
      <Child message={date.toLocaleTimeString()}/>
      <InputComponent />
    </div>
  );
}

export default App;
