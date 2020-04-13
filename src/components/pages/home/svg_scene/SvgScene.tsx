import React from "react";
import './SvgScene.scss';
import Grass from "./grass/Grass";

export default function SvgScene() {
    return (<div className="svg-scene">
        <svg>
            <Grass/>
        </svg>
    </div>);
}
