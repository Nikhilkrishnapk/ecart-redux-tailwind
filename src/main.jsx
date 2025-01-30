import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import cartStore from "./redux/cartStore.js";
cartStore

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={cartStore}>    {/* provider is used to availabling redux store into react and the redux store is called cartStore.js*/}
        <App />
        </Provider>
    </BrowserRouter>
  </StrictMode>
);
