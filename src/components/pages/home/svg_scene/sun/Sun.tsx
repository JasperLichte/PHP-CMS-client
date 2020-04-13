import React from "react";
import SunShine, {ISunshineProps} from "./SunShine";

interface IProps {
    radius: number,
    shines: number,
    shineLengthLong: number,
    shineLengthShort: number
}

export default function Sun({radius, shines, shineLengthLong, shineLengthShort}: IProps) {
    const cx = -140;
    const cy = 300;

    const slice = 2 * Math.PI / shines;
    const shineProps: ISunshineProps[] = [];
    for (let i = 0; i < shines; i++) {
        const r = radius + (i % 2 === 0 ? shineLengthLong : shineLengthShort);
        const angle = slice * i;
        shineProps.push({
            p1: {
                x: cx + (radius + 10) * Math.cos(angle),
                y: cy + (radius + 10) * Math.sin(angle),
            },
            p2: {
                x: cx + r * Math.cos(angle),
                y: cy + r * Math.sin(angle),
            },
        });
    }

    return (<g className="sun">
        <circle cx={cx} cy={cy} r={radius} />
        {shineProps.map((l, i) => (
            <SunShine
                key={`${l.p1.x},${l.p1.y}`}
                {...l}
            />
        ))}
    </g>);
}
