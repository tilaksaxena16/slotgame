import React from "react";
import "./App.css";
import { Slotmach } from "./Slotmach";

const App = () => {

  return (
    <>
      <h1 className="heading-style">🎰 Welcome to Slot Machine Game 🎰</h1>
      <div className="slotmachine">
        <Slotmach x = "😊" y = "😊" z = "😊"/>
        <Slotmach x = "🍖" y = "🍗" z = "🥩"/>
        <Slotmach x = "🍎" y = "🍎" z = "🍎" />
        <Slotmach x = "🤩" y = "🥰" z = "🤩"/>
      </div>
    </>
  )
}

export { App }