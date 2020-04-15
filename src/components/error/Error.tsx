import React from "react";
import ErrorType from "../../util/errors/ErrorType";

interface IProps {
    errorType: ErrorType,
    message?: string,
}

export default function Error({errorType, message}: IProps) {
    const component = ((errorType: ErrorType) => {
        switch (errorType) {
            case ErrorType.INVALID_LICENSE:
                return (<p>{message || 'Invalid License!'}</p>);
            case ErrorType.SERVER_ERROR:
                return (<p>{message || 'Unexpected Server error'}</p>);
            case ErrorType.NOT_FOUND:
                return (<p>{message || 'Not found'}</p>);
        }
        return <p>An error occurred</p>;
    })(errorType);

    return (<section>{component}</section>);
}
