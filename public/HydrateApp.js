//import React from "react";
//import ReactDOM from "react-dom";

const { React, ReactDOM } = window;
//import App from "../App.js";

function App(props) {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    console.log("pressed");
    return setCount(count + 1);
  };

  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      `Hey ${props.name}`
    ),
    React.createElement(
      "p",
      null,
      `Number is ${count}`
    ),
    React.createElement(
      "button",
      { onClick: increment },
      "press me"
    ),
    React.createElement("h3", null, "Hi Lara")
  );
}

ReactDOM.hydrate(
  React.createElement(
    App,
    { name: "Will" },
    null
  ),
  document.getElementById("root")
);
