import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import ManualAdd from "./pages/ManualAdd";
import Bibliography from "./pages/Bibliography";
import Nav from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./components/Register";
// import { import } from "../../../../../../uadel-adel-fsf-pt-11-2020-u-c/week_14/01-Activities/16-Stu_Sessions/Solved/config/connection";

import API from './utils/API';

function App() {
  const [user,setUser] = useState(false);

  const handleLogin = e =>{
    e.preventDefault();
    API.loginApi()
    .then((data)=>{
      
    })
    .catch()
  }
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
        <Route exact path={"/"} handleLogin={handleLogin} render={props => <landing {...props} user={user.toString()}handleLogin={handleLogin}/>}>
            <Search />
          </Route>
          <Route exact path={["/", "/search"]}>
            <Search />
          </Route>
          <Route exact path={"/manualadd"}>
            <ManualAdd />
          </Route>
          <Route exact path={"/bibliography"}>
            <Bibliography />
          </Route>
          <Route exact path={"/login"}>
            <Login />
            </Route>
          <Route exact path={"/register"}>
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
