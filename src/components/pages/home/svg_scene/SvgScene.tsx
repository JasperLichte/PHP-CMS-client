import React from "react";
import './SvgScene.scss';
import Grass from "./grass/Grass";
import Sun from "./sun/Sun";
import Cloud from "./cloud/Cloud";
import {useHistory} from "react-router-dom";

interface IProps {
    links: {target: string, title: string}[]
}
export default function SvgScene({links}: IProps) {
    const history = useHistory();
    const scale = calculateScaleByWindowSize();

    return (<div className="svg-scene">
        <svg>
            <Sun radius={80} shineLengthLong={70} shineLengthShort={50} shines={16} />
            <Grass/>
            {links.map((l, i) => (<Cloud
                key={l.target}
                text={l.title}
                onClick={() => history.push(l.target)}
                pos={{x: calculateCloudXPos(), y: (i + 2) * 120 * scale}}
                scale={scale}
                animationDelay={3000 + (600 * i)}
                color={'#fff'}
            />))}
        </svg>
        <div className="ground" />
    </div>);
}

function calculateCloudXPos(): number {
    const max = window.innerWidth - 160;
    const min = (window.innerWidth <= 600 ? 80 : 40);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calculateScaleByWindowSize(): number {
    if (window.innerHeight < 600) {
        return 0.7;
    }
    if (window.innerHeight < 700) {
        return 0.75;
    }
    if (window.innerHeight < 800) {
        return 0.85;
    }
    return 1;
}
