import { Link } from "react-router-dom"
import router from "../../router.url.json"

function NavBar() {
  return (
    <div className="w-full h-16 absolute bottom-0 flex justify-around">
      <Link to={router.DASHBOARD} className="material-icons floater text-center h-fit">dashboard</Link>
      <Link to={router.JOURNAL} className="material-icons floater text-center h-fit">draw</Link>
      <Link to={router.ACCOUNT} className="material-icons floater text-center h-fit">account_circle</Link>
    </div>
  )
}

export default NavBar