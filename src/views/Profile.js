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
        <Route exact path="/profile/stats">
          <Styles/>
        </Route>
        <Route exact path="/profile/display">
          <Styles/>
        </Route>

      </Switch>

    </div>
  )
}

export default Dashboard;