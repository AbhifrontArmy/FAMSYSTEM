import React from 'react';
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";


import Login from './pages/login';
import Role from './pages/role';
import Dashboard from './pages/dashboard';
import Project from './pages/project';
import User from './pages/user';
import Add from './pages/addrole';
import Adduser from './pages/adduser';
import Profile from './pages/profile';
import Layout from './components/layout/index';
import Pagination from './pages/pagination';
import Updaterole from './pages/updaterole';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Layout>
            <Route path="/Dashboard" exact component={Dashboard} />
            <Route path="/role" exact component={Role} />
            <Route path="/project" exact component={Project} />
            <Route path="/user" exact component={User} />
            <Route path="/addrole" exact component={Add} />
            <Route path="/adduser" exact component={Adduser} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/Pagination" exact component={Pagination} />
            <Route path="/Updaterole" exact component={Updaterole} />

          </Layout>
        </Switch>
      </Router>
    </>
  );
}

export default App;
