import React from "react";
import ItemBox from '../ItemBox'
import "./ListBox.css";

const ListBox = ({ list, deleteItem }) => {
  return (
    <ul className="list_box">
      {Object.values(list).map(item => {
        return <ItemBox {...item} key={item.id} onClick={deleteItem} />;
      })}
    </ul>
  );
};

export default ListBox;