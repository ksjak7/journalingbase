import "../App.css";
import Card from "../widgets/Card";
import { SESSIONDATA } from "../models/enums.ts"


// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
export default function Dashboard() {
  return (
    <div>
      <img src={localStorage.getItem(SESSIONDATA.PHOTO_URL) || ""}></img>
      <Card title="Dashboard" />
    </div>
  );
}
