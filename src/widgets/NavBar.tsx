import { Link, useLocation } from "react-router-dom";
import urls from "../../router.url.json";

export default function NavBar() {
  const path = useLocation();

  if (path.pathname == "/") {
    return <></>;
  }

  return (
    <div className="w-full h-16 absolute bottom-0 flex justify-around">
      <Link
        to={urls.DASHBOARD}
        replace
        className="material-icons floater text-center h-fit hover:bg-[var(--primary-accent)] hover:-translate-y-2 transition-all"
      >
        dashboard
      </Link>
      <Link
        to={urls.JOURNAL}
        replace
        className="material-icons floater text-center h-fit hover:bg-[var(--secondary-accent)] hover:-translate-y-2 transition-all"
      >
        draw
      </Link>
      <Link
        to={urls.ACCOUNT}
        replace
        className="material-icons floater text-center h-fit hover:bg-[var(--tertiary-accent)] hover:-translate-y-2 transition-all"
      >
        account_circle
      </Link>
    </div>
  );
}
