import "./styles.css";
import Gadgets from "./Gadgets.js";
// Build a React component called Gadgets that receives an array of products as a prop. Render each product's name, description, and price as an ordered list. Add a border around the product details which has price above 50000.

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
    name: "monitor",
    description: "Lenovo 32-inch display Monitor",
    price: 10000
  },
  { id: 4, name: "mobile", description: "iPhone 13 Pro Max", price: 140000 },
  {
    id: 5,
    name: "speakers",
    description: "Creative Desktop Speakers",
    price: 5000
  },
  {
    id: 6,
    name: "headphones",
    description: "Sony over-the-ear wired Headphones with mic",
    price: 1500
  },
  { id: 7, name: "mobile", description: "iPhone 12", price: 90000 }
];
export default function App() {
  return (
    <div className="App">
      <Gadgets prodArr={products} />
    </div>
  );
}

const Gadgets = (props) => {
    const { prodArr } = props;
    return (
      <>
        <div>
          {prodArr.map(({ name, description, price }) => {
            return (
              <>
                <div
                  style={{
                    border: price > 50000 ? "2px solid black" : "none",
                    backgroundColor: price > 50000 ? "lightblue" : "none"
                  }}
                >
                  <p>name:{name}</p>
                  <p>description:{description}</p>
                  <p>price:{price}</p>
                </div>
                <hr />
              </>
            );
          })}
        </div>
      </>
    );
  };
  
  export default Gadgets;
  
