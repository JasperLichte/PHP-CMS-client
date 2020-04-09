import Serializable from "../../interfaces/Serializable";

class ApiResponse<T> implements Serializable {

    public success = false;
    public data: T;
    public message = '';

    constructor(data: T) {
        // @ts-ignore
        this.data = data;
    }

    deserialize(input: {}): ApiResponse<T> {

        // @ts-ignore
        this.success = !!input['success'];

        // @ts-ignore
        input['message'] && (this.message = `${input['message']}`);

        return this;
    }

}

export default ApiResponse;
