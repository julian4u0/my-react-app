import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="bg-red-100 border border-red-300 p-2 items-center">
      <ul className="flex flex-row font-semibold m-auto justify-evenly w-full">
        <li className="nav-item pl-2 not-selected">
          <Link className="text-red-500 hover:text-red-700" to="/profile">Links</Link>
        </li>
        <li className="nav-item pl-2 not-selected">
          <Link className="text-red-500 hover:text-red-700" to="/styles">Styles</Link>
        </li>
        <li className="nav-item pl-2 not-selected">
          <Link className="text-red-500 hover:text-red-700" to="/analytics">Marketplace</Link>
        </li>
        <li className="nav-item pl-2 not-selected">
          <Link className="text-red-500 hover:text-red-700" to="/analytics">Stats</Link>
        </li>
      </ul>

    </nav>
  )
}

export default Navigation;