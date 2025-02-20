import { NavigateFunction } from "react-router-dom"
import { SESSIONDATA } from "../models/enums"
import { resetSession } from "./session"

interface SessionInfo {
  sessionToken: string,
}

export async function journalingApi(
  navigate: NavigateFunction,
  url: RequestInfo | URL,
  init?: RequestInit,
): Promise<Response> {
  const sessionToken = localStorage.getItem(SESSIONDATA.SESSION_TOKEN) || ""
  init = init || {} as RequestInit

  init.headers = {
    Authorization: sessionToken
  }

  const response = await fetch(url, init)
  const sessionInfo: SessionInfo = await response.clone().json()
  if (response.status == 401) {
    resetSession(navigate)
  } else {
    localStorage.setItem(SESSIONDATA.SESSION_TOKEN, sessionInfo.sessionToken || "")
  }

  return response
}