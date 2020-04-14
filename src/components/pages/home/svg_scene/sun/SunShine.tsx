import React from "react";

export interface ISunshineProps {
    p1: {x: number, y: number},
    p2: {x: number, y: number},
    filter: string,
}

const SunShine: React.FC<ISunshineProps> = ({
    p1,
    p2,
    filter,
    ...rest
}: ISunshineProps) => {
    return <line
        className="sun-shine"
        filter={filter}
        {...rest}
        x1={p1.x}
        y1={p1.y}
        x2={p2.x}
        y2={p2.y}
    />;
};

export default SunShine;
