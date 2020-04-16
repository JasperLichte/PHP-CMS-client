import React from "react";
import {Link} from "react-router-dom";

export default function DashboardPage() {
    return (<>
        <h1>Dashboard</h1>
        <ul>
            <li><Link to="/admin/kontakt">Kontakt</Link></li>
            <li><Link to="/admin/impressum">Impressum</Link></li>
            <li><Link to="/admin/statistics">Statistics</Link></li>
        </ul>
    </>);
}
