import React, { useEffect, useState } from "react";
import { getProdList } from "../../api/products.api";

function ProductList(props) {
  const { onBuy } = props;

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
    <section>
      <h2>Список продуктов</h2>

      <ul className="list">
        {prodList.map((product) => (
          <li key={product.id}>
            <article>
              <h3>
                {product.brand}: {product.name}
              </h3>
              <div>
                <div>Цена</div>
                <div>{product.price}</div>
              </div>
              <div>
                <div>Кол-во на складе</div>
                <div>{product.amount}</div>
              </div>
              <div>
                <button
                  onClick={() => {
                    onBuy(product.id);
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
  );
}

export default ProductList;
