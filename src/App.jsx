import { useState } from "react";
import "./App.css";
import Button from "./components/1_button/Button";

function App() {
  function handleClick() {
    console.log(`button clicked`);
  }
  return (
    <>
      <Button
        classes={"bg-orange-500 text-white rounded px-4 py-1"}
        button_name={"previous"}
        clickFunction={handleClick}
      />
    </>
  );
}

export default App;
