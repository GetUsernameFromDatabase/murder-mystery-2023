import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./app.tsx";
import "./index.css";
import { store } from "./store/index.ts";

const root = createRoot(document.querySelector("#root")!);
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
