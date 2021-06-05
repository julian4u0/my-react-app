import Link from "next/link";
import { useRouter } from "next/router";

function Navigation() {
  const router = useRouter();
  const styles = {
    active: "text-green-300 hover:text-green-600",
    unactive: "text-gray-600 hover:text-gray-500",
  };

  return (
    <nav className="bg-grayb border-b p-2 items-center">
      <ul className="flex flex-row font-semibold m-auto justify-evenly w-full">
        <div
          className={
            router.pathname == "/profile/links"
              ? styles.active
              : styles.unactive
          }
        >
          <Link href="/profile/links">Links</Link>
        </div>
        <div
          className={router.pathname == "/profile/styles" ? styles.active : styles.unactive}
        >
          <Link href="/profile/styles">Styles</Link>
        </div>
        <div
          className={router.pathname == "/profile/a" ? styles.active : styles.unactive}
        >
          <Link href="/profile/display">Display</Link>
        </div>
        <div
          className={router.pathname == "/profile/b" ? styles.active : styles.unactive}
        >
          <Link href="/profile/stats">Stats</Link>
        </div>
      </ul>
    </nav>
  );
}

export default Navigation;
