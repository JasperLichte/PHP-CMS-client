import React, {useState} from "react";
import SunShine, {ISunshineProps} from "./SunShine";

interface IProps {
    radius: number,
    shines: number,
    shineLengthLong: number,
    shineLengthShort: number
}

export default function Sun({radius, shines, shineLengthLong, shineLengthShort}: IProps) {
    const [numberOfShines, setNumberOfShines] = useState(0);
    const [filter, setFilter] = useState('');

    const cx = -140;
    const cy = 300;

    const slice = 2 * Math.PI / numberOfShines;
    const shineProps: ISunshineProps[] = [];
    for (let i = 0; i < numberOfShines; i++) {
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
            filter: '',
        });
    }

    return (
    <g className="sun" onAnimationEnd={() => {
        setNumberOfShines(shines);
        setFilter('url(#softGlow)');
    }}>
        <defs>
            <filter id="softGlow" height="300%" width="300%" x="-75%" y="-75%">
                <feMorphology operator="dilate" radius="4" in="SourceAlpha" result="thicken" />
                <feGaussianBlur in="thicken" stdDeviation="40" result="blurred" />
                <feFlood floodColor="#f3f35c" result="glowColor" />
                <feComposite in="glowColor" in2="blurred" operator="in" result="softGlow_colored" />
                <feMerge>
                    <feMergeNode in="softGlow_colored"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>
        <circle cx={cx} cy={cy} r={radius} filter={filter} />
        {shineProps.map((l, i) => (
            <SunShine
                key={`${l.p1.x},${l.p1.y}`}
                {...l}
            />
        ))}
    </g>);
}
