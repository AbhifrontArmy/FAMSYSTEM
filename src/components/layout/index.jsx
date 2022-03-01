import React from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar";

function Layout({ children }) {
    return (
        <>
            <Header />
            <Sidebar />
            {children}
        </>
    );
}

export default Layout;