import React, {useEffect, useState} from "react";
import Loader from "react-spinners/PropagateLoader";
import './LoadingSpinner.scss';

interface IProps {
    color: string,
    loading: boolean,
    delayMs?: number,
    fullScreen?: boolean,
}

export default function LoadingSpinner({color, loading, delayMs, fullScreen}: IProps) {
    const [ isLoading, setIsLoading ] = useState(loading);
    useEffect(() => {
        if (!loading) {
            const timeOut = setTimeout(() => setIsLoading(false), delayMs || 0);

            return () => clearTimeout(timeOut);
        }
    }, [loading, delayMs]);

    if (fullScreen === undefined) {
        fullScreen = false;
    }

    return (<div className={`loading ${fullScreen && ' loading-fs'}`} data-active={(isLoading ? 'yes' : 'no')}>
        <Loader
            color={color}
            loading={true}
            size={25}
        />
    </div>);
}
