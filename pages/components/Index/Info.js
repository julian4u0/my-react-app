import {Link} from "react-router-dom";

function Info() {
  return (
    <div className="w-full p-6 font-nunito bg-grayb border-t text-4xl text-gray-200">
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
        to="/profile"
        className="bg-gray-500 text-lg mb-24 hover:bg-gray-400 w-1/2 text-white font-bold py-2 px-4 border-b-4 border-gray-700 focus:outline-none hover:border-gray-500 rounded">
        Go to profile
      </Link>
    </div>
  )
}

export default Info;