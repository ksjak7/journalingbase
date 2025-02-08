import { useNavigate } from "react-router-dom"
import { ENV, SESSIONDATA, URLS } from "../models/enums.ts"
import { useEffect } from "react"

type ResponseData = {
  accountId: number | null
}

export default function Root() {
  const navigate = useNavigate()
  useEffect(() => {
    async function handleSession() {
      const accountId: number = Number.parseInt(localStorage.getItem(SESSIONDATA.ACCOUNT_ID) || "")
      const sessionToken: string = localStorage.getItem(SESSIONDATA.SESSION_TOKEN) || ""

      console.log(`accountId: ${accountId}\nsessionToken: ${sessionToken}`)
      if (accountId
        && sessionToken
        && await validateSessionToken(accountId, sessionToken)) {
        navigate(URLS.DASHBOARD)
      } else {
        localStorage.clear()
        navigate(URLS.LOGIN)
      }
    }

    async function validateSessionToken(accountId: number, sessionToken: string): Promise<boolean> {
      const response = await fetch(
        `${ENV.JOURNALING_API_URL}/validateSession`,
        {
          method: "GET",
          headers: {
            "SessionToken": sessionToken
          }
        })
        .then(data => data.json()) as ResponseData

      console.log(`response: ${JSON.stringify(response)}`)
      
      return accountId == response.accountId
    }

    handleSession()
  })
  return(
    <>
      Loading...
    </>
  )
}