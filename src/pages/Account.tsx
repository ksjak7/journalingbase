import { Link } from "react-router-dom";
import "../App.css";
import urls from "../../router.url.json";

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
export default function Account() {
  return (
    <div>
      <Link to={urls.LOGIN} onClick={() => {
        sessionStorage.clear()
      }} className="text-on-primary">
        Sign Out
      </Link>
    </div>
  );
}
