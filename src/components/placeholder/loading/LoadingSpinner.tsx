import React, {useEffect, useState} from "react";
import Loader from "react-spinners/PropagateLoader";
import './LoadingSpinner.scss';

interface IProps {
    color: string,
    loading: boolean,
    delayMs?: number,
}

export default function LoadingSpinner({color, loading, delayMs}: IProps) {
    const [ isLoading, setIsLoading ] = useState(loading);
    useEffect(() => {
        if (!loading) {
            setTimeout(() => setIsLoading(false), delayMs || 0);
        }
    }, [loading, delayMs]);

    return (<div className="loading loading-fs" data-active={(isLoading ? 'yes' : 'no')}>
        <Loader
            color={color}
            loading={true}
            size={25}
        />
    </div>);
}
