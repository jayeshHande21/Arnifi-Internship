import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { mediaContext, mediaProvider } from "./context/mediaContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export { mediaContext, mediaProvider };

root.render(
  <StrictMode>
    <Router>
      <mediaProvider>
        <App />
      </mediaProvider>
    </Router>
  </StrictMode>
);
