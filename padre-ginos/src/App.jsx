import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { CartContext } from "./contexts";
import Order from "./Order";
import Header from "./Header";
import PizzaOfTheDay from "./PizzaOfTheDay";


const App = () => {
  const cartHook = useState([]);
  return (
    <StrictMode>
      <CartContext.Provider value={cartHook}>
        <div>
          <Header />
          <Order />
          <PizzaOfTheDay />
        </div>
      </CartContext.Provider>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
