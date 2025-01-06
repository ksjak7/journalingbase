import "../App.css";
import urls from "../../router.url.json";
import { GoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
export default function Login(this: any) {
  return (
    <>
      <div className="grid grid-cols-2 m-auto text-center gap-1 items-center h-fit">
        <label className="text-on-primary bg-[var(--primary)] outline">
          Journaling
        </label>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
          size="large"
          auto_select
        />
        <Link to={urls.DASHBOARD}>Dashboard</Link>
      </div>
    </>
  );
}

// const [usernameInput, setUsernameInput] = useState("")
// const [passwordInput, setPasswordInput] = useState("")

// const loginPress = async () => {
//   await fetch(`${env.API_URL}/login`, {
//     method: "POST",
//     body: JSON.stringify({
//       username: usernameInput,
//       password: passwordInput
//     })
//   })
//     .then(response => response.json())
// }
// <div className="floater flex flex-col m-auto w-[400px] sm:w-[500px] h-fit text-center">
//   <h1 className="poiret-one-regular mb-2">Journaling</h1>
//   <form className="flex flex-col h-full gap-[12px] mb-2" onSubmit={loginPress}>
//     <label className="text-left">Username:</label>
//     <input className="floater"
//       onChange={event => setUsernameInput(event.target.value)}
//       type="text"
//       value={usernameInput} />
//     <label className="text-left caret-black">Password:</label>
//     <input className="floater"
//       onChange={event => setPasswordInput(event.target.value)}
//       type="password"
//       value={passwordInput} />
//   </form>
// </div>
// <a className="floater w-full hover:bg-green-500 transition-all duration-500" onClick={loginPress}>Login</a>
// <Link to="/account" replace className="text-sm text-on-primary">Create Account</Link>
