import React from "react";
import { createRoot } from "react-dom/client";

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", { key: props.name }, props.name),
    React.createElement("p", { key: props.description }, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { key: "header" }, "Padre Gino's"),
    React.createElement(Pizza, {
      key: "pepperoni",
      name: "The Pepperoni Pizza",
      description: "Mozzarella Cheese, Pepperoni",
    }),
    React.createElement(Pizza, {
      key: "hawaiian",
      name: "The Hawaiian Pizza",
      description: "Sliced Ham, Pineapple, Mozzarella Cheese",
    }),
    React.createElement(Pizza, {
      key: "big-meat",
      name: "The Big Meat Pizza",
      description: "Bacon, Pepperoni, Italian Sausage, Chorizo Sausage",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
