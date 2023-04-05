import "./styles.css";
import About from "./About.js";
// Build a React component called About that accepts three props: heading, your name and learning. Inside the component, render a <h1> tag with the heading prop, <h2> tag with your name and a button below that which says “Know More”. On the click of the button, show the learning in a <p> tag just below the button.

// Data:

const heading = "About Me";
const name = "Umesh Mehta"; // you can put your name
const learning = "I am learning React JS currently at neoG Camp.";
export default function App() {
  return (
    <div className="App">
      <About heading={heading} name={name} learning={learning} />
    </div>
  );
}
import { useState } from "react";
const About = (props) => {
  const { name, heading, learning } = props;
  const [click, setClick] = useState("false");
  return (
    <>
      <h1>{heading}</h1>
      <h1>{name}</h1>
      <button onClick={() => setClick(!click)}>Know more</button>
      <p style={{ display: !click ? "block" : "none" }}>{learning}</p>
    </>
  );
};
export default About;
