import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import Tables from "views/admin/Tables.js";

export default function Admin() {
  return (
    <>
    <div className="h-screen md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden">
    <Sidebar />
      <div className="relative md:ml-64 bg-lightBlue-100">
        <AdminNavbar />
        {/* Header */}
        {/* <HeaderStats /> */}
        <div className="px-4 mx-auto w-full">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/tables" exact component={Tables} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
        </div>
      </div>
    </div>
      
    </>
  );
}
