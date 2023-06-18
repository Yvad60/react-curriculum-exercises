import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CartContextProvider from "./contexts/CartContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </StrictMode>
);
