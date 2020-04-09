import React from "react";
import ErrorType from "../../util/errors/ErrorType";

interface IProps {
    errorType: ErrorType,
}

export default function Error({errorType}: IProps) {
    const component = ((errorType: ErrorType) => {
        switch (errorType) {
            case ErrorType.INVALID_LICENSE:
                return (<p>Invalid License!</p>);
            case ErrorType.SERVER_ERROR:
                return (<p>Unexpected Server error</p>);
            case ErrorType.NOT_FOUND:
                return (<p>Not found</p>);
        }
        return <p>An error occurred</p>;
    })(errorType);

    return (<section>{component}</section>);
}
