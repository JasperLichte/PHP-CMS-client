import ResponseData from "./ResponseData";

class PreflightResponse implements ResponseData{

    public settings = [];
    public user = null;

    deserialize(input: {}): PreflightResponse {
        // @ts-ignore
        input['settings'] && (this.settings = input['settings']);
        // @ts-ignore
        input['user'] && (this.settings = input['user']);

        return this;
    }

}

export default PreflightResponse;
