import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ProductsProvider } from "./context/products_context.jsx";
import { FilterProvider } from "./context/filter_context.jsx";
import { CartProvider } from "./context/cart_context.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./context/user_context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-xmt2yxxikx7t5o0i.us.auth0.com"
    clientId="HudczGEYbtM2RoINS96VFqRHSO06PejM"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <React.StrictMode>
        <ProductsProvider>
          <FilterProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>
      </React.StrictMode>
    </UserProvider>
  </Auth0Provider>
);
