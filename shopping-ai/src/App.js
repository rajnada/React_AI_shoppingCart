import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    alanBtn({
      key: "456445fd84a11bc237d00ab5594b3bab2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        if (commandData.command === "getMenu") {
          setProducts(commandData.data);
        } else if (commandData.command === "getCart") {
          setCart((currentCart) => [...currentCart, commandData.data]);
        }
      },
    });
  }, []);

  return (
    <div className="App">
      <h1>Menu</h1>
      {products.map((product) => (
        <div key={product.name}>
          {product.name} - {product.price} - {product.category}
        </div>
      ))}
      <h1>Cart</h1>
      {cart.map((cartItem) => (
        <div key={cartItem.name}>
          {cartItem.name} - {cartItem.price} - {cartItem.category}
        </div>
      ))}
    </div>
  );
};

export default App;
