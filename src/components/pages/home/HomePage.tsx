import React, {useEffect} from "react";
import './HomePage.scss';
import SvgScene from "./svg_scene/SvgScene";

export default function HomePage() {
    useEffect(() => {
        document.body.classList.add('home');

        return () => document.body.classList.remove('home')
    }, []);

    return (<div className="home-page">
        <SvgScene links={[
            {target: '/-/about', title: 'Über uns'},
            {target: '/-/team', title: 'Team'},
            {target: '/-/whats-important', title: 'Unser Motto'},
            {target: '/-/impressum', title: 'Impressum'},
        ]}/>
        <h1>Kinderstube<span>Sethweg e.V.</span></h1>
    </div>);
}
