import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NavBar from "./widgets/NavBar";

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
function App() {
  return (
    <main className="w-screen h-screen flex flex-col">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <NavBar title={"Alec"} />
      </BrowserRouter>
    </main>
  );
}

export default App