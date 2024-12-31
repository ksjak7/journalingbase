import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <main className="w-screen h-screen" 
      style={{
        background: 'radial-gradient(var(--primary) 1px, var(--secondary) 1px)',
        backgroundSize: '32px 32px'
      }}>
      <App />
    </main>
  </React.StrictMode>,
);
