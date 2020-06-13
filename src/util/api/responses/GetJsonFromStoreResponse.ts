import ResponseData from "./ResponseData";

class GetJsonFromStoreResponse implements ResponseData{

    public json: string = '';

    deserialize(input: {}): GetJsonFromStoreResponse {
        if (!input) {
            return this;
        }

        // @ts-ignore
        input['json'] && (this.json = input['json']);

        return this;
    }

}

export default GetJsonFromStoreResponse;
