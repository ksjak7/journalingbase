import "../App.css";
import Card from "../widgets/Card";

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
export default function Dashboard() {
  return (
    <div>
      <img src={sessionStorage.getItem("photo_url") || ""}></img>
      <Card title="Dashboard" />
    </div>
  );
}
