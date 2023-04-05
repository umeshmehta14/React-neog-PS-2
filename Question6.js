import "./styles.css";
import Article from "./Article.js";

// Build a React component called Article that accepts two props: title and content. Inside the component, render a <h1> tag with the title prop and a button below that which says “Know More”. On the click of the button, show the content in a <p> tag just below the button.

// Data:

const title = "React is awesome";
const content = "React is a JavaScript library for building user interfaces.";

export default function App() {
  return (
    <div className="App">
      <Article title={title} content={content} />
    </div>
  );
}


import { useState } from "react";

const Article = (props) => {
  const { title, content } = props;
  const [click, setClick] = useState("false");
  return (
    <>
      <h1>{title}</h1>
      <button onClick={() => setClick((click) => !click)}>Know more</button>
      <p style={{ display: click ? "none" : "block" }}>{content}</p>
    </>
  );
};
export default Article;
