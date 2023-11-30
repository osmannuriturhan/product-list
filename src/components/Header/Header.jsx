import React from "react";
import "./Header.css";
import { categories } from "../../helper/data";

const Header = () => {
  return (
    <div className="header-main">
      <h1>Product List</h1>
      <div className="btn-pro">
        {categories.map((item) => (
          <button>{item.toUpperCase()}</button>
        ))}
      </div>
    </div>
  );
};

export default Header;
