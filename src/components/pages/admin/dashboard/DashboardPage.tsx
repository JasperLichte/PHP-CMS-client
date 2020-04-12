import React from "react";
import {Link} from "react-router-dom";
import AdminPage from "../AdminPage";

export default function DashboardPage() {
    return (<AdminPage className="dashboard">
        <h1>Dashboard</h1>
        <ul>
           <li><Link to="/admin/statistics">Statistics</Link></li>
            <li><Link to="/admin/pages">Pages</Link></li>
            <li><Link to="/admin/files">Files</Link></li>
        </ul>
    </AdminPage>);
}
