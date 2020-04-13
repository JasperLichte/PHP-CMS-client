import React from "react";
import './HomePage.scss';
import SvgScene from "./svg_scene/SvgScene";

export default function HomePage() {
    return (<div className="home-page">
        <SvgScene links={[
            {target: '/about', title: 'Über uns'},
            {target: '/team', title: 'Team'},
            {target: '/einrichtung', title: 'Einrichtung'},
            {target: '/impressum', title: 'Impressum'},
        ]}/>
    </div>);
}
