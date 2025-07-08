import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Textform(props) {
  const [text, setText] = useState('');

  const copyToClipboard = () => {
    let text = localStorage.getItem("textcopy");
    navigator.clipboard.writeText(text).then(() => {
      props.showAlert("success", "Copy to Clipboard...");
      document.getSelection().removeAllRanges();
    });
  }

  const removeSpace = () => {
    let newText = text.split(/ +/);
    setText(newText.join(" "));
props.showAlert("success","extra space has been removed")
  }

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("success", "Upper case converted");
  }

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("success", "Lower case converted");
  }

  const handleClearClick = () => {
    let newText = "";
    localStorage.setItem("value", text);
    setText(newText);
    props.showAlert("success", "Text is clear");
  }

  const handleOnChange = (evt) => {
    setText(evt.target.value);
    localStorage.setItem("textcopy", evt.target.value);
  }

  return (
    <>
      <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
        <h2>{props.heading}</h2>
        <div className="mb-2">
          <textarea className="form-control mb-2" id="exampleFormControlTextarea" rows={8} value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#302b48' :"white", color: props.mode === 'dark' ? 'white' : 'black', border: props.mode === 'dark' ? '1.5px solid white' : '1px solid black' }}></textarea>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
          <button disabled={text.length===0}className="btn btn-primary  mx-1 my-1" onClick={handleClearClick}>Clear text</button>
          <button disabled={text.length===0}className="btn btn-primary" onClick={removeSpace}>Remove Extra Spaces</button>
          <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={copyToClipboard}>Copy to clipboard</button>
        </div>
      </div>
      <div className="container"style={{color:props.mode==="dark"?"white":"black"}}>
        <p style={{ wordWrap: "break-word" }}>previous texts: {localStorage.getItem("value")}</p>
        <h2 >Your text summary is here:</h2>
        <p>{text.split(/\s/).filter(word => word.length > 0).length} words and {text.length} characters</p>
        <p>time to read these words is {0.08 * text.split(" ").filter(word => word.length > 0).length} Minutes</p>
        <p>sentence count: {text.split(/[.!?]/).filter(sentence => sentence.length > 0).length}</p>
        <div className="container" style={{ wordWrap: "break-word", padding: 0 }}>{text.length === 0 ? "Nothing to preview" : text}</div>
      </div>
    </>
  );
}

Textform.propTypes = {
  heading: PropTypes.string.isRequired
}
