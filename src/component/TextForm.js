import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };
  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text has been cleared", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  };

  // Credits: Coding Wala
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <div className="btn btn-primary mx-3" onClick={handleUpClick}>
          Convert to uppercase
        </div>
        <div className="btn btn-primary mx-3" onClick={handleLowClick}>
          Convert to lowercase
        </div>
        <div className="btn btn-primary mx-3" onClick={handleClear}>
          Clear text
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} and {text.length}
        </p>
        <p>{0.008 * text.split(" ").length} seconds to read</p>
        <h1>Preview</h1>
        <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
      </div>
    </>
  );
}