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
      <header>
        <div>Mini-Rozetka</div>
        <nav></nav>
      </header>

      <main>
        <section>
          <h2>Список продуктов</h2>
          <ul>

            {prodList.map((prod) => (
              <li>
                <article>
                  <h3>{prod.brand}: {prod.name}</h3>
                  <div>
                    <div>Цена</div>
                    <div>{prod.price}</div>
                  </div>
                  <div>
                    <div>Кол-во на складе</div>
                    <div>{prod.amount}</div>
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
