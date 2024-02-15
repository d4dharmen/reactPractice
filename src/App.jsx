import { useState } from "react";
import "./App.css";
import Button from "./components/1_button/Button";
import Cards from "./components/2_cards/Cards";

function App() {
  function handleClick() {
    console.log(`button clicked`);
  }
  return (
    <>
      {/* <Button
        classes={"bg-orange-500 text-white rounded px-4 py-1"}
        button_name={"previous"}
        clickFunction={handleClick}
      /> */}
      <Cards
        image={"src/assets/images/stack-of-books.png"}
        title={"color book"}
        descriptions={"this is the description of the image taged above"}
      />
    </>
  );
}

export default App;
