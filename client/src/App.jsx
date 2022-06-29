import { useEffect, useState } from "react";
import { getCategList } from "./api/categories.api";
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

  const [categList, setCategList] = useState([]);

  useEffect(() => {
    const asyncWrapper = async () => {
      // get categs list from backend
      const categs = await getCategList();
      setCategList(categs);
    };
    asyncWrapper();
  }, []);

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');

    return JSON.parse(savedCart) || [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="App">
      <header>
        <div>Mini-Rozetka</div>
        <nav></nav>
        <div>
          <div>Козина ({cart.length})</div>

          <button
            onClick={() => {
              // createOrderFromCart(cart); // POST /api/orders
            }}
          >
            Заказать все из корзины
          </button>
        </div>
      </header>

      <main>
        <section>
          <h2>Список категорий</h2>
          <ul>
            {categList.map((c) => (
              <li key={c.id}>{c.name}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Список продуктов</h2>

          <ul className="list">
            {prodList.map((prod) => (
              <li key={prod.id}>
                <article>
                  <h3>
                    {prod.brand}: {prod.name}
                  </h3>
                  <div>
                    <div>Цена</div>
                    <div>{prod.price}</div>
                  </div>
                  <div>
                    <div>Кол-во на складе</div>
                    <div>{prod.amount}</div>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        setCart((s) => [
                          ...s,
                          { product_id: prod.id, amount: 1 },
                        ]);
                      }}
                    >
                      Купить
                    </button>
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
