import {Link} from "react-router-dom";
import {Disclosure} from '@headlessui/react'

function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="bg-red-100">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-20">
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">

              <Disclosure.Button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-red-500 hover:text-white hover:bg-red-500 focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </Disclosure.Button>
            </div>
            <div
              className="flex-1 flex items-center text-center px-2 md:px-14 justify-between sm:justify-start">
              <div className="flex-shrink-0 flex items-center">

                {/* Start Logo  */}
                <Link to="/">

                  <svg
                    className="block h-12 w-auto"
                    id="Logo"
                    height="512"
                    viewBox="0 0 512 512"
                    width="512"
                    xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <g><path
                        d="m288.03 403.8-.32-.25-63.26.2c-50.98 5.77-88.45 25.19-88.45 48.25 0 27.61 53.73 50 120 50s120-22.39 120-50c0-22.99-37.25-42.36-87.97-48.2z"
                        fill="#d8ec84"/><path
                        d="m224.45 403.75c-46.62-58.63-128.45-170.55-128.45-233.75 0-88.37 71.63-160 160-160s160 71.63 160 160c0 63.13-81.65 174.87-128.29 233.55-18.65 23.47-31.71 38.45-31.71 38.45s-12.98-14.9-31.55-38.25z"
                        fill="#ff7b79"/><path
                        d="m296 120c23.68 0 40 20.07 40 43.84 0 32.88-32.55 54.65-80 96.16-47.45-41.51-80-63.28-80-96.16 0-23.77 16.32-43.84 40-43.84 30.4 0 40 35 40 35s9.6-35 40-35z"
                        fill="#fce8d0"/></g>
                      <g><path
                        d="m296 110c-19.864 0-32.464 11.341-40 22.294-7.536-10.953-20.136-22.294-40-22.294-29.002 0-50 24.259-50 53.84 0 32.45 24.975 53.729 62.779 85.939 6.589 5.614 13.401 11.418 20.637 17.748 1.885 1.648 4.234 2.473 6.584 2.473s4.699-.825 6.584-2.474c7.235-6.329 14.048-12.134 20.637-17.748 37.804-32.209 62.779-53.488 62.779-85.938 0-29.585-21.002-53.84-50-53.84zm-25.75 124.555c-4.613 3.931-9.336 7.955-14.25 12.197-4.914-4.243-9.637-8.267-14.25-12.197-34.766-29.621-55.75-47.5-55.75-70.715 0-19.292 12.897-33.84 30-33.84 22.274 0 30.044 26.543 30.366 27.682 1.204 4.324 5.143 7.318 9.634 7.318 4.504 0 8.452-3.011 9.644-7.355.076-.276 7.842-27.645 30.356-27.645 17.103 0 30 14.548 30 33.84 0 23.215-20.984 41.095-55.75 70.715z"/><circle cx="368" cy="56" r="10"/><path
                        d="m205.94 396.376c-32.543 5.936-79.94 22.602-79.94 55.624 0 34.206 55.888 60 130 60s130-25.794 130-60c0-33.068-47.521-49.709-79.939-55.626 40.325-51.939 119.939-160.98 119.939-226.374 0-29.205-7.532-58.015-21.781-83.314-2.711-4.813-8.811-6.515-13.62-3.806-4.813 2.71-6.516 8.808-3.806 13.62 12.565 22.31 19.207 47.726 19.207 73.5 0 43.629-45.969 126.487-126.119 227.329-9.911 12.473-18.278 22.583-23.879 29.246-5.194-6.179-12.766-15.324-21.745-26.564-.664-1.678-128.257-154.749-128.257-230.011 0-82.71 67.29-150 150-150 24.852 0 49.463 6.198 71.175 17.925 4.858 2.624 10.926.813 13.551-4.047 2.624-4.859.813-10.926-4.047-13.551-24.622-13.298-52.521-20.327-80.679-20.327-93.738 0-170 76.262-170 170 0 65.497 79.851 174.743 119.94 226.376zm50.058 55.624h.002c2.89 0 5.639-1.25 7.538-3.429.123-.141 11.701-13.444 28.336-34.208 46.511 6.314 74.126 23.794 74.126 37.637 0 28.456-76.705 40-110 40-45.298 0-110-15.234-110-40 0-13.869 27.594-31.312 74.133-37.63 16.634 20.756 28.205 34.057 28.327 34.199 1.898 2.179 4.647 3.431 7.538 3.431z"/></g>
                    </g>
                  </svg>

                </Link>
                {/* End Logo  */}
              </div>
              <div className="hidden sm:block sm:ml-auto">
                <div className="flex space-x-4">
                  <Link
                    to="/"
                    className="text-red-400 text-lg hover:text-red-500 px-3 py-2 font-semibold">Explore</Link>
                  <Link
                    to="/profile"
                    className="text-red-400 text-lg hover:text-red-500 px-3 py-2 font-semibold">My Space</Link>
                  <Link
                    to="/"
                    className="text-red-400 text-lg hover:text-red-500 px-3 py-2 font-semibold">About</Link>
                  <Link
                    to="/"
                    className="text-red-400 text-lg hover:text-red-500 px-3 py-2 font-semibold">Login</Link>

                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Mobile Menu */}
        <Disclosure.Panel className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="text-red-400 text-lg hover:text-red-500 px-3 py-2 font-semibold">Explore</Link>
            <Link
              to="/profile"
              className="text-red-400 text-lg hover:text-red-500 px-3 py-2 font-semibold">My Space</Link>
            <Link
              to="/"
              className="text-red-400 text-lg hover:text-red-500 px-3 py-2 font-semibold">About</Link>
            <Link
              to="/"
              className="text-red-400 text-lg hover:text-red-500 px-3 py-2 font-semibold">Login</Link>

          </div>
        </Disclosure.Panel>
        {/* End Mobile Menu */}
      </div>
    </Disclosure>
  );
}

export default Navbar;