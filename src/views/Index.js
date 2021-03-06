import React from "react";
import Navbar from '../components/Navbar'
import Welcome from '../components/Index/Welcome'
import CheckUsername from '../components/Index/CheckUsername'
import Info from '../components/Index/Info'

function Index() {
  return (
    <div>
      <Navbar/>
      <div className="bg-grayb border-t border-gray-600 pt-10 flex flex-col items-center">
        <Welcome/>
        <CheckUsername />

        <Info />   
      </div>
      <div className="bg-red-100"></div>
    </div>
  )
}

export default Index;