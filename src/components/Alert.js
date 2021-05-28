

function Alert({ isLogin, logo }) {
    return (
        <div
          className="bg-red-100 mb-6 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert">
          <strong className="font-bold">Holy smokes!</strong>
          <span className="block pl-1 sm:inline">That username is already taken.</span>
    
        </div>
      )
}

export default Alert;