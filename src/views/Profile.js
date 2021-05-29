import React from "react";
import Navbar from '../components/Navbar'
import LinksContainer from "../components/Profile/LinksContainer";
import Navigation from "../components/Profile/Navigation";

function Dashboard() {
  return (
    <div>
      <Navbar/>
      <Navigation/>
      <div className="bg-red-50 pt-4 flex flex-col items-center">

        <LinksContainer/>

      </div>
    </div>
  )
}

export default Dashboard;