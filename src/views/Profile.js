import React from "react";
import Navbar from '../components/Navbar'
import LinksContainer from "../components/Profile/LinksContainer";
import Navigation from "../components/Profile/Navigation";
import {Redirect, Route, Switch} from "react-router";
import Styles from "../components/Profile/Styles";

function Dashboard() {
  return (
    <div>
      <Navbar/>
      <Navigation/>
      <Switch>
        
        <Route exact path="/profile">
          <LinksContainer/>
        </Route>
        <Route exact path="/profile/styles">
          <Styles/>
        </Route>

      </Switch>

      <div className="bg-red-50 pt-4 flex flex-col items-center">


      </div>
    </div>
  )
}

export default Dashboard;