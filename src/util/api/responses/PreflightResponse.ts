import ResponseData from "./ResponseData";
import Setting from "../../models/Setting";
import User from "../../models/User";

class PreflightResponse implements ResponseData{

    public settings: Setting[] = [];
    public user: User|null = null;
    public allowMultiRequests: boolean = false;

    deserialize(input: {}): PreflightResponse {
        if (!input) {
            return this;
        }

        // @ts-ignore
        input['settings'] && (this.settings = input['settings'].map(s => (new Setting()).deserialize(s)));
        // @ts-ignore
        input['user'] && (this.user = (new User()).deserialize(input['user']));
        // @ts-ignore
        (this.allowMultiRequests = !!input['allowMultiRequests']);


        return this;
    }

}

export default PreflightResponse;
