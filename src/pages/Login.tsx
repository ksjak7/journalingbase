import "../App.css";
import urls from "../../router.url.json"
import env from "../../env.json"
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

type ResponseData = {
  accountId: string,
  name: string,
  photoUrl: string,
}

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
export default function Login() {
  const navigate = useNavigate()
  const loginPress = useGoogleLogin({
    onSuccess: async (credentialResponse) => {
      // const response = await fetch(`https://content-people.googleapis.com/v1/people/me?personFields=names,emailAddresses,photos&sources=READ_SOURCE_TYPE_PROFILE&key=${env.GAPI_PERSON_API}`,
      //   {
      //     method: "GET",
      //     headers: {
      //       Authorization: `Bearer ${credentialResponse.access_token}`
      //     }
      //   }
      // ).then(data => data.json()) as ResponseData
      const response = await fetch(`${env.JOURNALING_API_URL}/user?accessToken=${credentialResponse.access_token}`)
        .then(data => data.json()) as ResponseData
      localStorage.setItem("account_id", response.accountId)
      localStorage.setItem("display_name", response.name)
      localStorage.setItem("photo_url", response.photoUrl)
      navigate(urls.DASHBOARD)
    }
  })



  return (
    <>
      <div className="grid grid-cols-2 m-auto text-center gap-2 items-center h-fit">
        <label className="h-[40px] flex items-center outline outline-[var(--tertiary)] outline-1 drop-shadow-md rounded-2xl rounded-r-none bg-[var(--secondary)] p-2 text-on-secondary">
          Journaling
        </label>
        <button
          onClick={() => loginPress()}
          className="h-[40px] flex items-center outline outline-[var(--tertiary)] outline-1 drop-shadow-md rounded-2xl rounded-l-none bg-[var(--secondary)] p-2 text-on-secondary">
          <img src="googleicon.svg" className="h-[24px]" />
        </button>

        {/* <Link to={urls.DASHBOARD}>Dashboard</Link> */}
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
