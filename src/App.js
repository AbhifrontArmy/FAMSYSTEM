import React, { useState } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./pages/login";
import Role from "./pages/role";
import Dashboard from "./pages/dashboard";
import Project from "./pages/project";
import User from "./pages/user";
import AddRole from "./pages/addrole";
import Adduser from "./pages/adduser";
import Profile from "./pages/profile";
import Layout from "./components/layout/index";
import Alert from "./components/Alert";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };
  return (
    <>
      <Router>
        <Alert alert={alert} />
        <Switch>
          <Route path="/" exact component={Login} />
          <Layout>
            <Route path="/Dashboard" exact component={Dashboard} />
            <Route path="/role" exact component={Role} />
            <Route path="/project" exact component={Project} />
            <Route path="/user" exact component={User} />
            <Route path="/addrole" exact>
              <AddRole showAlert={showAlert}/>
            </Route>
            <Route path="/adduser" exact component={Adduser} />
            <Route path="/profile" exact component={Profile} />
          </Layout>
        </Switch>
      </Router>
    </>
  );
}

export default App;
