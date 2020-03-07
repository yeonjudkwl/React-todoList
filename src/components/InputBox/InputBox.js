import React from "react";
import "./InputBox.css";

const InputBox = () => {
  return (
    <div className="input_box">
        <input type="text" name="work" id="work"/>
        <button className="input_btn">save</button>
    </div>
  );
};

export default InputBox;