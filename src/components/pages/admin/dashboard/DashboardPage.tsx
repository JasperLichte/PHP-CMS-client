import React from "react";
import {Link} from "react-router-dom";
import './DashboardPage.scss';

export default function DashboardPage() {
    return (<div className="dashboard-page">
        <ul>
            <Link to="/admin/about"><li style={{backgroundColor: 'tomato'}}>
                Über uns
            </li></Link>
            <Link to="/admin/kontakt"><li style={{backgroundColor: 'darkorange'}}>
                Kontakt
            </li></Link>
            <Link to="/admin/impressum"><li style={{backgroundColor: 'purple', color: '#fff'}}>
                Impressum
            </li></Link>
            <Link to="/admin/statistics"><li style={{backgroundColor: '#222', color: '#fff'}}>
                Statistiken
            </li></Link>
            <Link to="/auth/logout"><li style={{backgroundColor: '#5a021e', color: '#fff'}}>
                Logout
            </li></Link>
        </ul>
    </div>);
}
