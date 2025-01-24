import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import urls from "../router.url.json";

import Journal from "./pages/Journal";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import NavBar from "./widgets/NavBar";
import { GoogleOAuthProvider } from "@react-oauth/google";
import env from "../env.json"
import Root from "./pages/Root";
// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
export default function App() {
  return (
    <GoogleOAuthProvider clientId={env.CLIENT_ID}>
      <div className="max-w-screen w-full max-h-screen h-full flex flex-col overflow-hidden">
        <BrowserRouter>
          <Routes>
            <Route key={urls.ROOT} path={urls.ROOT} element={<Root/>} />
            <Route key={urls.LOGIN} path={urls.LOGIN} element={<Login />} />
            <Route
              key={urls.JOURNAL}
              path={urls.JOURNAL}
              element={<Journal />}
            />
            <Route
              key={urls.DASHBOARD}
              path={urls.DASHBOARD}
              element={<Dashboard />}
            />
            <Route
              key={urls.ACCOUNT}
              path={urls.ACCOUNT}
              element={<Account />}
            />
          </Routes>
          <NavBar />
        </BrowserRouter>
      </div>
    </GoogleOAuthProvider>
  );
}