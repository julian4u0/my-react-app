import {Link} from "react-router-dom";

function Info() {
  return (
    <div className="w-full p-6 font-nunito bg-white text-4xl text-red-900">
      <div>
        Link your socials!
      </div>
      <div>
        Get Insights!
      </div>
      <div>
        Share with others
      </div>
      <Link
        to="/dashboard"
        className="bg-red-500 text-lg mb-24 hover:bg-red-400 w-1/2 text-white font-bold py-2 px-4 border-b-4 border-red-700 focus:outline-none hover:border-red-500 rounded">
        Create My Perspace
      </Link>
    </div>
  )
}

export default Info;