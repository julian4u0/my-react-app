import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="bg-grayc border-t border-b border-gray-600 p-2 items-center">
      <ul className="flex flex-row font-semibold m-auto justify-evenly w-full">
        <li className="nav-item pl-2">
          <Link className="text-gray-50 hover:text-gray-300" to="/profile">Links</Link>
        </li>
        <li className="nav-item pl-2">
          <Link className="text-gray-50 hover:text-gray-300" to="/profile/styles">Styles</Link>
        </li>
        <li className="nav-item pl-2">
          <Link className="text-gray-50 hover:text-gray-300" to="/profile/display">Display</Link>
        </li>
        <li className="nav-item pl-2">
          <Link className="text-gray-50 hover:text-gray-300" to="/profile/stats">Stats</Link>
        </li>
      </ul>

    </nav>
  )
}

export default Navigation;