import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
    <main className="w-full h-screen" 
      style={{
        background: 'radial-gradient(var(--tertiary) 1px, var(--primary) 1px)',
        backgroundSize: '32px 32px'
      }}>
      <App />
    </main>
  </React.StrictMode>,
);
