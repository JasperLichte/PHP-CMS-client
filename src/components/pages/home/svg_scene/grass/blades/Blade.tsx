import React from "react";

export interface IBladeProps {
    x: number,
    width: number,
    height: number,
}

export default function Blade({x, width, height}: IBladeProps) {
    const points = [
        {x: x + (width / 2), y: 0},
        {x: x, y: height},
        {x: x + width, y: height},
    ];

    const darkness = Math.floor(Math.random() * (101)) + 15;

    return <polygon
        className="blade"
        points={points.map(p => ({...p, y: p.y + (120 - height)})).map(p => `${p.x} ${p.y}`).join(', ')}
        fill={`rgb(${darkness}, 140, ${darkness})`}
        style={{
            animationDuration: `${(Math.floor(Math.random() * 3000 - 500)) + 500}ms`
        }}
    />;
}
