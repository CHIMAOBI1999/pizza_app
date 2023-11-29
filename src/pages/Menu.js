import React from "react";
import MenuList from "../components/helpers/MenuList";
import Menultem from "../components/menultem";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menu-title">our menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <Menultem
              Key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
