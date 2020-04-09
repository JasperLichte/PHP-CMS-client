import ResponseData from "./ResponseData";
import Setting from "../../models/Setting";

class PreflightResponse implements ResponseData{

    public settings: Setting[] = [];
    public user = null;

    deserialize(input: {}): PreflightResponse {
        // @ts-ignore
        input['settings'] && (this.settings = input['settings'].map(s => (new Setting()).deserialize(s)));
        // @ts-ignore
        input['user'] && (this.settings = input['user']);

        return this;
    }

}

export default PreflightResponse;
