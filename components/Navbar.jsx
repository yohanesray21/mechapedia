import { Link } from "@mui/material";
import React from "react";

import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/" style={{ textDecoration: "none", color: "gray" }}>
          ONAN TECH
        </Link>
      </p>

      <button type="button" className="cart-icon" onClick="">
        <AiOutlineShopping />
        <span className="cart-item-qty">1</span>
      </button>
    </div>
  );
};

export default Navbar;
