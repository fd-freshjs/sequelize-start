import { useEffect, useState } from "react";
import { getProdList } from "./api/products.api";
import "./App.css";

function App() {
  const [prodList, setProdList] = useState([]);

  useEffect(() => {
    const asyncWrapper = async () => {
      // get product list from backend
      const products = await getProdList();
      setProdList(products);
    };
    asyncWrapper();
  }, []);

  return (
    <div className="App">
      <header></header>

      <main>
        <section>
          <h2>Product list</h2>
          <ul>
            {prodList.map((prod) => (
              <li>
                <article>
                  <h3>Brand: Product name 1</h3>
                  <div>
                    <div>Price</div>
                    <div>123</div>
                  </div>
                  <div>
                    <div>Amount</div>
                    <div>123</div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
