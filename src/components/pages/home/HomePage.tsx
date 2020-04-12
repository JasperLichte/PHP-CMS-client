import React from "react";
import {Link} from "react-router-dom";
import './HomePage.scss';

export default function HomePage() {
    return (<div className="home-page">
        <nav>
            <Link to="/team">Das Team</Link>
            <Link to="/einrichtung">Die Einrichtung</Link>
            <Link to="/angebot">Das Angebot</Link>
        </nav>
    </div>);
}
