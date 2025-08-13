import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { AppProvider } from "./Context/appContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <BrowserRouter>
      <App />
    </BrowserRouter>
    </AppProvider>
  </StrictMode>
);
