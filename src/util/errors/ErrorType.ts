enum ErrorType {
    INVALID_LICENSE = 1,
    SERVER_ERROR = 2,
    NOT_FOUND = 3,
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
