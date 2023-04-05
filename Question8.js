import "./styles.css";
import MyGadgets from "./MyGadgets.js";

// Build a React component called MyGadgets that receives an array of products as a prop. Render each product's name, description, and price as an ordered list. Create a button below all the listings which says “Highlight Expensive Gadget” and on click of the button add a lightgreen backgroundColor to the items which has a price more than 50000.

// Data:

const products = [
  {
    id: 1,
    name: "keyboard",
    description: "Logitech Mechanical Keyboard",
    price: 2000
  },
  { id: 2, name: "mouse", description: "Dell Wireless Mouse", price: 1200 },
  {
    id: 3,
    name: "speakers",
    description: "Bose L1 Pro32 Portable",
    price: 256000
  },
  { id: 4, name: "mobile", description: "iPhone 13", price: 61000 },
  {
    id: 5,
    name: "monitor",
    description: "Lenovo 32-inch display Monitor",
    price: 10000
  },
  { id: 6, name: "mobile", description: "iPhone 13 Pro Max", price: 140000 },
  {
    id: 7,
    name: "speakers",
    description: "Creative Desktop Speakers",
    price: 5000
  },
  {
    id: 8,
    name: "headphones",
    description: "Sony over-the-ear wired Headphones with mic",
    price: 1500
  },
  { id: 9, name: "mobile", description: "iPhone 12", price: 90000 }
];
export default function App() {
  return (
    <div className="App">
      <MyGadgets products={products} />
    </div>
  );
}


import { useState } from "react";
const MyGadgets = (props) => {
  const { products } = props;
  const [click, setClick] = useState("false");
  return (
    <>
      <div>
        {products.map(({ name, description, price }) => {
          return (
            <>
              <div
                style={{
                  border: "2px solid black",
                  margin: "1rem",
                  backgroundColor:
                    !click && price > 50000 ? "lightgreen" : "white"
                }}
              >
                <p>name:{name}</p>
                <p>description:{description}</p>
                <p>price:{price}</p>
                <button onClick={() => setClick(!click)}>
                  Highlight Expensive Gadget{" "}
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default MyGadgets;
