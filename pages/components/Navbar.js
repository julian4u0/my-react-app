// import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import Icon from "./Images/Icon";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  const styles = {
    active: "text-gray-50 text-lg hover:text-gray-200 px-1 py-2 font-semibold",
    unactive:
      "text-gray-500 text-lg hover:text-gray-300 px-1 py-2 font-semibold",
  };

  return (
    <Disclosure as="nav">
      <div className="bg-grayb">
        <div className="max-w-7xl border-b mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-20">
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <Disclosure.Button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-white hover:bg-gray-500 focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </Disclosure.Button>
            </div>
            <div className="flex-1 flex items-center text-center px-2 md:px-14 justify-between sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                {/* Start Logo  */}
                <Link href="/">
                  <Icon />
                </Link>
                {/* End Logo  */}
              </div>
              <div className="hidden sm:block sm:ml-auto">
                <div className="flex text-gray-400 space-x-4">
                  <div
                    className={
                      router.pathname == "/profile/links"
                        ? styles.active
                        : styles.unactive
                    }
                  >
                    <Link href="/profile/links">My Profile</Link>
                  </div>
                  <div
                    className={
                      router.pathname == "/profile/connect"
                        ? styles.active
                        : styles.unactive
                    }
                  >
                    <Link href="/profile/connect">Connect</Link>
                  </div>
                  <div
                    className={
                      router.pathname == "/explore"
                        ? styles.active
                        : styles.unactive
                    }
                  >
                    <Link href="/explore">Explore</Link>
                  </div>
                  <div
                    className={
                      router.pathname == "/explore"
                        ? styles.active
                        : styles.unactive
                    }
                  >
                    <Link href="/explore">About</Link>
                  </div>
                  <div
                    className={
                      router.pathname == "/explore"
                        ? styles.active
                        : styles.unactive
                    }
                  >
                    <Link href="/explore">Connect</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <Disclosure.Panel className="sm:hidden" id="mobile-menu">
          <div className="px-2  text-gray-400 flex items-center flex-col pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="text-lg hover:text-gray-100 px-3 py-2 font-semibold"
            >
              Explore
            </Link>
            <Link
              href="/profile"
              className="text-lg hover:text-gray-100 px-3 py-2 font-semibold"
            >
              My Profile
            </Link>
            <Link
              href="/"
              className="text-lg hover:text-gray-100 px-3 py-2 font-semibold"
            >
              About
            </Link>
            <div className="text-lg hover:text-gray-100 px-3 py-2 font-semibold">
              HOla
            </div>
            <Link
              href="/connect"
              className="text-lg hover:text-gray-100 px-3 py-2 font-semibold"
            >
              Connect
            </Link>
          </div>
        </Disclosure.Panel>
        {/* End Mobile Menu */}
      </div>
    </Disclosure>
  );
}

export default Navbar;
