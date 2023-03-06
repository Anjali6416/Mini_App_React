import React from 'react';
import { Link } from "react-router-dom";
import style from "../Styles/Navbar.module.css";
function Navbar() {
  return (
    <div className={style.navbar}>
      <div>
        <Link className={style.links} to={"/"}>
          <h1>Mini App</h1>
        </Link>
      </div>
      <div>
        <Link className={style.links} to={"/cart"}>
          <h1>Cart</h1>
        </Link>
      </div>
      <div>
        {" "}
        <Link className={style.links} to={"/orders"}>
          <h1>Orders</h1>
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
