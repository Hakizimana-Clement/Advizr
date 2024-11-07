import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App.tsx";
import "./index.css";
import { store } from "./redux/store";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <ToastContainer />
          <App />
        </QueryClientProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
