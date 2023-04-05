import "./styles.css";
import ColorPicker from "./ColorPicker.js";

// Build a React component called "ColorPicker" that displays a list of colors as buttons. On click of each button show the HEX code for that color, just below each button.

// Data:

const red = "#EE4B2B";
const blue = "#89CFF0";
const green = "#7FFFD4";


export default function App() {
  return (
    <div className="App">
      <ColorPicker red={red} blue={blue} green={green} />
    </div>
  );
}


import { useState } from "react";

const ColorPicker = ({ red, blue, green }) => {
  const [color, setColor] = useState("black");
  let disp = true;
  const ClickHandle = (col) => {
    if (color === col) {
      disp = false;
      setColor("black");
    } else {
      setColor(col);
    }
  };
  return (
    <>
      <button onClick={() => ClickHandle("red")}>Red</button>
      <p style={{ visibility: disp && color === "red" ? "visible" : "hidden" }}>
        {red}
      </p>

      <button onClick={() => ClickHandle("blue")}>Blue</button>
      <p
        style={{ visibility: disp && color === "blue" ? "visible" : "hidden" }}
      >
        {blue}
      </p>

      <button onClick={() => ClickHandle("green")}>Green</button>
      <p
        style={{ visibility: disp && color === "green" ? "visible" : "hidden" }}
      >
        {green}
      </p>
    </>
  );
};

export default ColorPicker;
