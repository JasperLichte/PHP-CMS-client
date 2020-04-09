enum ErrorType {
    INVALID_LICENSE = 0,
    SERVER_ERROR = 1,
    NOT_FOUND = 2,
}

export default ErrorType;
export function errorTypeByHttpStatusCode(statusCode: number): ErrorType|null {
    switch (statusCode) {
        case 200: return null;
        case 404: return ErrorType.NOT_FOUND;
        case 500: return ErrorType.SERVER_ERROR;
    }
    return ErrorType.SERVER_ERROR;
}
