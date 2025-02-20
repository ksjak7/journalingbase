import { useNavigate } from "react-router-dom"
import { ENV, SESSIONDATA, URLS } from "../models/enums.ts"
import { useEffect } from "react"
import { journalingApi } from "../utils/requests.ts"

export default function Root() {
  const navigate = useNavigate()
  useEffect(() => {
    async function handleSession() {
      const accountId: number = Number.parseInt(localStorage.getItem(SESSIONDATA.ACCOUNT_ID) || "")
      const sessionToken: string = localStorage.getItem(SESSIONDATA.SESSION_TOKEN) || ""

      if (accountId
        && sessionToken
        && await validateSessionToken()) {
        navigate(URLS.DASHBOARD)
      } else {
        localStorage.clear()
        navigate(URLS.LOGIN)
      }
    }

    async function validateSessionToken(): Promise<boolean> {
      const response = await journalingApi(
        navigate,
        `${ENV.JOURNALING_API_URL}/validateSession`,
        {
          method: "GET"
        })
      
      return response.status == 200
    }

    handleSession()
  })
  return(
    <>
      Loading...
    </>
  )
}