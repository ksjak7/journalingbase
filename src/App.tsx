import "./App.css";
import Card from "./widgets/Card";

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
function App() {
  return (
    <main className="w-screen h-screen grid grid-cols-2 gap-10 p-20">
      <Card title="Welcome to Tauri + React"/>
      <Card title="Welcome to Tauri + React"/>
      <Card title="Welcome to Tauri + React"/>
      <Card title="Welcome to Tauri + React"/>
    </main>
  );
}

export default App;