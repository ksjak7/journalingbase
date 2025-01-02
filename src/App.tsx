import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import NavBar from "./widgets/NavBar";
import router from "../router.url.json"
import SuspendedElement from "./widgets/SuspendedElement";
import Journal from "./pages/Journal";
import Account from "./pages/Account";
import Dashboard from "./pages/Dashboard";

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
function App() {
  return (
    <div className="w-full h-full flex flex-col">
      <BrowserRouter>
        <Routes>
            <Route key="/" path="/" element={
              <SuspendedElement element={<Login/>}/>
            }/>
            <Route key={router.LOGIN} path={router.LOGIN} element={
              <SuspendedElement element={<Login/>}/>
            } />
            <Route key={router.JOURNAL} path={router.JOURNAL} element={
              <SuspendedElement element={<Journal/>}/>
            } />
            <Route key={router.DASHBOARD} path={router.DASHBOARD} element={
              <SuspendedElement element={<Dashboard/>}/>
            } />
            <Route key={router.ACCOUNT} path={router.ACCOUNT} element={
              <SuspendedElement element={<Account/>}/>
            } />
        </Routes>
        <NavBar/>
      </BrowserRouter>
    </div>
  );
}

export default App 