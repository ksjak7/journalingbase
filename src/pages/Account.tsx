import { Link } from "react-router-dom";
import "../App.css";
import { URLS } from "../models/enums.ts"

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
export default function Account() {
  return (
    <div>
      <Link to={URLS.LOGIN} onClick={() => {
        localStorage.clear()
      }} className="text-on-primary">
        Sign Out
      </Link>
    </div>
  );
}
