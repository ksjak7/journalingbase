import "../App.css";
import { URLS, ENV, SESSIONDATA } from "../models/enums.ts"
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { journalingApi } from "../utils/requests.ts";

type ResponseData = {
  accountId: string,
  name: string,
  photoUrl: string,
  sessionToken: string,
}

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
export default function Login() {
  const navigate = useNavigate()
  const loginPress = useGoogleLogin({
    onSuccess: async (credentialResponse) => {
      console.log(credentialResponse)
      const response = await journalingApi(navigate, `${ENV.JOURNALING_API_URL}/user?accessToken=${credentialResponse.access_token}`)
        .then(data => data.json()) as ResponseData
      localStorage.setItem(SESSIONDATA.ACCOUNT_ID, response.accountId)
      localStorage.setItem(SESSIONDATA.DISPLAY_NAME, response.name)
      localStorage.setItem(SESSIONDATA.PHOTO_URL, response.photoUrl)
      navigate(URLS.DASHBOARD)
    },
  })



  return (
    <>
      <div className="grid grid-cols-2 m-auto text-center gap-2 items-center h-fit">
        <label className="h-[40px] flex items-center outline-[var(--tertiary)] outline-1 drop-shadow-md rounded-2xl rounded-r-none bg-[var(--secondary)] p-2 text-on-secondary">
          Journaling
        </label>
        <button
          onClick={() => loginPress()}
          className="h-[40px] flex items-center outline-[var(--tertiary)] outline-1 drop-shadow-md rounded-2xl rounded-l-none bg-[var(--secondary)] p-2 text-on-secondary">
          <img src="googleicon.svg" className="h-[24px]" />
        </button>
      </div>
    </>
  );
}