import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <main className="bg-grid-pattern bg-center w-screen h-screen">
      <App />
    </main>
  </React.StrictMode>,
);
