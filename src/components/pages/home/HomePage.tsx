import React, {useEffect} from "react";
import './HomePage.scss';
import SvgScene from "./svg_scene/SvgScene";

export default function HomePage() {
    useEffect(() => {
        document.body.classList.add('home');
    }, []);

    return (<div className="home-page">
        <SvgScene links={[
            {target: '/-/about', title: 'Über uns'},
            {target: '/-/team', title: 'Team'},
            {target: '/-/einrichtung', title: 'Einrichtung'},
            {target: '/-/impressum', title: 'Impressum'},
        ]}/>
        <h1>Kinderstube Sethweg e.V.</h1>
    </div>);
}
