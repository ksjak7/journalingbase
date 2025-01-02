import { Link } from "react-router-dom";
import "../App.css";
import Card from "../widgets/Card";

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
function Account() {
  return (
    <Link to="/login" className="text-on-primary">Sign Out</Link>
  );
}

export default Account