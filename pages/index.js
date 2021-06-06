import Head from "next/head";
import Navbar from "./components/Navbar";
import dynamic from "next/dynamic";

const CheckUsername = dynamic(() => import("./components/Index/CheckUsername"));
export default function Home() {
  return (
    <div>
      <Navbar />
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-grayb pt-6 flex flex-col items-center justify-center w-full flex-1  text-center">
        <div className="flex flex-col items-center">
          <div className="text-white font-bold w-3/4 md:w-1/2 text-center text-3xl">
            Perspace is a simple and meaningful way to share your social media,
            all in one place.
            <br />
          </div>
          <div className="text-gray-400 font-semibold w-3/4 md:w-1/2 mt-4 text-center text-2xl">
            Create your link now and engage your followers
          </div>
        </div>

        <CheckUsername />
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
}
