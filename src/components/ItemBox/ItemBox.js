import React from "react";
import "./ItemBox.css";

const ItemBox = () => {
  return (
    <li className="item_box">
      <span className="item_box_work">첫 번째 할 일</span>
      <button className="delete_btn">X</button>
    </li>
  );
};

export default ItemBox;