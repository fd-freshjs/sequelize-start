import { useEffect, useState } from "react";
import Header from "./components/Header";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    return JSON.parse(savedCart) || [];
  });

  const onBuy = (productId) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      const foundProdIndex = newCart.findIndex((cartItem) => {
        return cartItem.product_id === productId;
      });
      if (foundProdIndex >= 0) {
        newCart[foundProdIndex].amount++;
      } else {
        newCart.push({ product_id: productId, amount: 1 });
      }
      return newCart;
    });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="App">
      <Header cart={cart} />

      <main>
        <CategoryList />

        <ProductList onBuy={onBuy} />
      </main>
    </div>
  );
}

export default App;
