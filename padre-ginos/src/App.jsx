import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Order from "./Order";
import PizzaOfTheDay from "./PizzaOfTheDay";


const App = () => {
  return (
    <div>
      <h1>Padre Gino's Pizza</h1>
      <Order />
      <PizzaOfTheDay />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<StrictMode>
  <App />
</StrictMode>
);