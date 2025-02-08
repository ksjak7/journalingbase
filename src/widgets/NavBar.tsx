import { Link, useLocation } from "react-router-dom";
import { URLS } from "../models/enums.ts"

export default function NavBar() {
  const path = useLocation();

  if (path.pathname == "/") {
    return <></>;
  }

  return (
    <div className="w-full h-16 absolute bottom-0 flex justify-around">
      <Link
        to={URLS.DASHBOARD}
        replace
        className="material-icons floater text-center h-fit hover:bg-[var(--primary-accent)] hover:-translate-y-2 transition-all"
      >
        dashboard
      </Link>
      <Link
        to={URLS.JOURNAL}
        replace
        className="material-icons floater text-center h-fit hover:bg-[var(--secondary-accent)] hover:-translate-y-2 transition-all"
      >
        draw
      </Link>
      <Link
        to={URLS.ACCOUNT}
        replace
        className="material-icons floater text-center h-fit hover:bg-[var(--tertiary-accent)] hover:-translate-y-2 transition-all"
      >
        account_circle
      </Link>
    </div>
  );
}
