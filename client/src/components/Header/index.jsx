import React, { useState } from "react";
import styles from "./Header.module.css";

function Header(props) {
  const { cart } = props;
  const [showCart, setShowCart] = useState(false);

  const toggleShowCart = () => {
    setShowCart((s) => !s);
  };

  return (
    <header className={styles.header}>
      <div>Mini-Rozetka</div>
      <nav></nav>
      <div>
        <button onClick={toggleShowCart}>Козина ({cart.length})</button>
      </div>

      <div
        className={styles.cartModal}
        style={{ display: showCart ? "flex" : "none" }}
      >
        <div>
          <button onClick={toggleShowCart}>X</button>
          <ul>
            {cart.map((c) => {
              return (
                <li key={c.product_id}>
                  <span>{c.product_id}</span>
                  Amount:
                  <span>{c.amount}</span>
                </li>
              );
            })}
          </ul>
          <button
            onClick={() => {
              // createOrderFromCart(cart);
            }}
          >
            Оформить заказ
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
