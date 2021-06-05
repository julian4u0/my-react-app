import dynamic from "next/dynamic";
import "tailwindcss/tailwind.css";

const Navbar = dynamic(() => import("../components/Navbar").then((mod) => mod));
const LinksContainer = dynamic(() => import("../components/Profile/LinksContainer").then((mod) => mod));

const Navigation = dynamic(() => import('../components/Profile/Navigation'))


// posts will be populated at build time by getStaticProps()
function Links({ user }) {
  return (
    <div>
      <title>Links</title>

      <link rel="icon" href="/favicon.ico" />
      
      <Navbar />

      <Navigation />

      <LinksContainer />
      <ul>
        {user.links.map((link) => (
          <li key={link.name}>
            <a href={link.dir}> {link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getServerSideProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const res = await fetch('http://localhost:8080/user/1234')
  // const user = await res.json()

  const user = {
    _id: "60b6c85a89e4de3715b86e3a",
    userid: "1234",
    name: "juan",
    links: [
      { dir: "https://www.google.com/", name: "google" },
      { dir: "https://www.youtube.com/watch?v=CwxdzC2irIQ", name: "etc" },
      { dir: "https://www.youtube.com/watch?v=BufbPLRUAPo", name: "facebook" },
    ],
  };
  // console.log(user)

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      user,
    },
  };
}

export default Links;
