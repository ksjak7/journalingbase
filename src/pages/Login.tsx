import { useState } from "react";
import "../App.css";
import Card from "../widgets/Card";
import { Link } from "react-router-dom";

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
function Login(this: any) {
  const [usernameInput, setUsernameInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")

  const loginPress = async () => {
    await fetch("http://localhost:3000/login", {
      method: "POST",
      body: JSON.stringify({
        username: usernameInput,
        password: passwordInput
      })
    })
      .then(response => console.log(response.text()))
  }

  return (
    <div className="flex flex-col m-auto text-center gap-5">
      <div className="floater flex flex-col m-auto w-[500px] h-fit text-center">
        <h1 className="poiret-one-regular mb-2">Journaling</h1>
        <form className="flex flex-col h-full gap-[12px] mb-2" onSubmit={loginPress}>
          <label className="text-left">Username:</label>
          <input className="floater"
            onChange={event => setUsernameInput(event.target.value)}
            type="text" />

          <label className="text-left caret-black">Password:</label>
          <input className="floater"
            onChange={event => setPasswordInput(event.target.value)}
            type="text" />
        </form>
      </div>
        <button className="floater w-full hover:bg-green-500 transition-all duration-500" onClick={loginPress}>Login</button>
      <Link to="/account" className="text-sm text-on-primary">Create Account</Link>
    </div>
  );
}

export default Login