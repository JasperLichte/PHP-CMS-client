import React from "react";
import Blade, {IBladeProps} from "./Blade";

export default function Grass() {
    const props: IBladeProps[] = [];
    for (let i = 0; i < (window.innerWidth / 8); i++) {
        const height = Math.floor(Math.random() * (101)) + 60;
        props.push({
            x: i * 8,
            width: Math.round(height / 12),
            height: height,
        });
    }

    return (
<g className="grass">
    {props.map(p => <Blade {...p} key={p.x} />)}
</g>);
}
