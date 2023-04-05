import "./styles.css";
import Greeting from "./Greeting.js";

// Create a React component called Greeting that receives a name prop and displays a message like "Hello, name!" on the DOM.

export default function App() {
  return (
    <div className="App">
      <Greeting name={"umesh"} />
    </div>
  );
}

const Greeting = (para) => {
  return (
    <>
      <p>Hello {para.name}</p>
    </>
  );
};

export default Greeting;
