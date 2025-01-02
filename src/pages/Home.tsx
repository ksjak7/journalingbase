import "../App.css";
import Card from "../widgets/Card";

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
function Home() {
  return (
    <main className="w-screen h-screen">
          <Card title="HomePage" />
    </main>
  );
}

export default Home;