import React from "react";
import ItemBox from '../ItemBox'
import "./ListBox.css";

const ListBox = () => {
  return (
    <ul className="list_box">
      <ItemBox />
      <ItemBox />
    </ul>
  );
};

export default ListBox;