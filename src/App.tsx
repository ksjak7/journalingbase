import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import { URLS, ENV } from "./models/enums.ts"
import Journal from "./pages/Journal";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import NavBar from "./widgets/NavBar";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Root from "./pages/Root";

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
export default function App() {
  return (
    <GoogleOAuthProvider clientId={ENV.CLIENT_ID}>
      <div className="max-w-screen w-full max-h-screen h-full flex flex-col overflow-hidden">
        <BrowserRouter>
          <Routes>
            <Route key={URLS.ROOT} path={URLS.ROOT} element={<Root/>} />
            <Route key={URLS.LOGIN} path={URLS.LOGIN} element={<Login />} />
            <Route
              key={URLS.JOURNAL}
              path={URLS.JOURNAL}
              element={<Journal />}
            />
            <Route
              key={URLS.DASHBOARD}
              path={URLS.DASHBOARD}
              element={<Dashboard />}
            />
            <Route
              key={URLS.ACCOUNT}
              path={URLS.ACCOUNT}
              element={<Account />}
            />
          </Routes>
          <NavBar />
        </BrowserRouter>
      </div>
    </GoogleOAuthProvider>
  );
}