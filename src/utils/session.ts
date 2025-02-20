import { NavigateFunction } from "react-router-dom"
import { URLS } from "../models/enums"

export function resetSession(navigate: NavigateFunction) {
  localStorage.clear()
  navigate(URLS.LOGIN)
}