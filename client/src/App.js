import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import ManualAdd from "./pages/ManualAdd";
import Bibliography from "./pages/Bibliography";
import Nav from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/search"]}>
            <Search />
          </Route>
          <Route exact path={"/manualadd"}>
            <ManualAdd />
          </Route>
          <Route exact path={"/bibliography"}>
            <Bibliography />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
