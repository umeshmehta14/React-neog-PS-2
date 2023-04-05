import "./styles.css";
import Product from "./Product.js";

// Build a Product component that receives product name and price as props and displays them on DOM.

// The name should be in bold and blue in color
// Price should be in italics and green in color

export default function App() {
  return (
    <div className="App">
      <Product name={"soap"} price={"12000"} />
    </div>
  );
}


const Product = (prod) => {
    return (
      <>
        <p>product name: {prod.name}</p>
        <p>product price: {prod.price}</p>
      </>
    );
  };
  
  export default Product;
  