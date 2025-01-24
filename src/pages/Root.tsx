import urls from "../../router.url.json"
import { Navigate } from "react-router-dom"

export default function Root() {

  return <Navigate to={urls.DASHBOARD}/>
}