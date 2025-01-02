import { Link } from "react-router-dom"

function NavBar(
  {
    title,
  }:
  {
    title: string
  }
) {
  return (
    <div className="w-screen h-16 bg-white absolute bottom-0">
      <Link to="/home">{title}</Link>
    </div>
  )
}

export default NavBar