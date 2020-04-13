import React, {useState} from "react";

interface IProps {
    onClick: () => any,
    text: string,
    pos: {x: number, y: number,}
    scale: number,
    animationDelay: number,
    color: string,
}

const Cloud: React.FC<IProps> = ({onClick, text, pos, scale, animationDelay, color}) => {
    const [s, setScale] = useState(scale);
    const baseAnimationDuration = calculateRandomAnimationDuration();

    return <g className="cloud" style={{animationDelay: `${animationDelay}ms`}}>
        <g
            transform={`translate(${pos.x}, ${pos.y})`}
            onClick={onClick}
            onMouseEnter={() => setScale(scale)}
            onMouseLeave={() => setScale(scale)}
        >
            <circle cx={0} cy={0} r={30 * s} fill={color} className="base" style={{animationDuration: `${baseAnimationDuration}ms`}} />
            <circle cx={120 * s} cy={0} r={30 * s} fill={color} className="base" style={{animationDuration: `${baseAnimationDuration}ms`}} />
            <rect width={120 * s} height={60 * s} x={0} y={-30 * s} fill={color} className="base" style={{animationDuration: `${baseAnimationDuration}ms`}} />
            <circle cx={80 * s} cy={-30 * s} r={50 * s} fill={color} className="big" style={{animationDuration: `${calculateRandomAnimationDuration()}ms`}} />
            <circle cx={25 * s} cy={-30 * s} r={30 * s} fill={color} className="small" style={{animationDuration: `${calculateRandomAnimationDuration()}ms`}} />
            <text x={60 * s} y={-5 * s} dominantBaseline="middle" textAnchor="middle" style={{animationDuration: `${calculateRandomAnimationDuration()}ms`}}>{text}</text>
        </g>
    </g>
};

export default Cloud;

function calculateRandomAnimationDuration(): number {
    return getRandomInt(2000, 5000);
}

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
