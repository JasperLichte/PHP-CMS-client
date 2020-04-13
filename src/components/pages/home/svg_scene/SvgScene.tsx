import React from "react";
import './SvgScene.scss';
import Grass from "./grass/Grass";
import Sun from "./sun/Sun";

export default function SvgScene() {
    return (<div className="svg-scene">
        <svg>
            <Sun radius={80} shineLengthLong={60} shineLengthShort={70} shines={16} />
            <Grass/>
        </svg>
    </div>);
}
