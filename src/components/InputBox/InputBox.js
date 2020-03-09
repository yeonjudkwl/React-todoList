import React from "react";
import "./InputBox.css";

const InputBox = ({ work, onChange, onSubmit }) => {
  return (
    <div className="input_box">
        <input type="text" name="work" onChange={onChange} value={work}/>
        <button className="input_btn" onClick={onSubmit}>save</button>
    </div>
  );
};

export default InputBox;