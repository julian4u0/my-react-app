import React from 'react';
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import './tailwind.min.css'
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import Index from './views/Index';
import Profile from './views/Profile';
// import Create from "views/Create.js";
// import Community from "views/Community.js";

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    {/* add routes with layouts */}
    {/* <Route path="/community" component={Community}/>
    <Route path="/create" exact component={Create}/> */}
    <Route path="/profile" exact component={Profile}/>
    <Route path="/" exact component={Index}/> {/* add redirect for first page */}
    <Redirect from="*" to="/"/>
  </Switch>
</BrowserRouter>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function to
// log results (for example: reportWebVitals(console.log)) or send to an
// analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
