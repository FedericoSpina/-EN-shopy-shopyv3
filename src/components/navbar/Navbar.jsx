import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { CartContext } from "../../context/cart/CartContext";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { clear, quantityCart, priceCart } = useContext(CartContext);
  const { state, logout } = useContext(AuthContext);

  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <small> Shopy Shop :<small>{state.username}</small></small>
        </li>
      </ul>

      <ul>
        <li>
          <Link to="/">
            <small>Home</small>
          </Link>
        </li>
        <li>
          <Link to="/checkout">
            <small>Checkout</small>
          </Link>
        </li>
        <li>
          <button onClick={logout} >
            <p className={styles.salir}>Log-Out</p>
          </button>
        </li>
      </ul>

      <ul>
        <li>
          <small>${priceCart}</small>
        </li>
        <li>
          <div>
            <p className={styles.cantidad}>{quantityCart}</p>
            <div>🛒</div>
          </div>
          <div>
            <button onClick={clear}>
              <small>❌</small>
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
