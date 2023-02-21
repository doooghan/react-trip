import React from "react";
import App from "./Shopping";
import { AppStateProvider } from "./ShoppingState";

const ShoppingMain: React.FC = () => {
  return (
    <AppStateProvider>
      <App />
    </AppStateProvider>
  );
};

export default ShoppingMain;
