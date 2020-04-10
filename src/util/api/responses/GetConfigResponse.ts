import ResponseData from "./ResponseData";

class GetConfigResponse implements ResponseData {

    public baseApiUrl: string = '';

    deserialize(input: {}): GetConfigResponse {
        if (!input) {
            return this;
        }

        // @ts-ignore
        this.baseApiUrl = `${input['base_api_url']}`;

        return this;
    }

}

export default GetConfigResponse;
