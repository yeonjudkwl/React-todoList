import React from "react";
import "./ItemBox.css";

const ItemBox = ({ id, work, onClick }) => {
  return (
    <li className="item_box">
      <span className="item_box_work">{work}</span>
      <button className="delete_btn" onClick={() => onClick(id)}>X</button>
    </li>
  );
};

export default ItemBox;