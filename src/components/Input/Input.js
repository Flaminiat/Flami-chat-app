import React from "react";
import "./Input.css";

const Input = ({ message, setMessage, sendMessage }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="type a message"
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => (event.key === "Enter" ? sendMessage() : null)}
    ></input>
    <button className="sendButton" onClick={event => sendMessage(event)}>
      Send
    </button>
  </form>
);

export default Input;
