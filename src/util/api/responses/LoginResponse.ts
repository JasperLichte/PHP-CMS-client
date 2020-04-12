import ResponseData from "./ResponseData";
import User from "../../models/User";

class LoginResponse implements ResponseData {

    public user: User|null = null;

    deserialize(input: {}): LoginResponse {
        if (!input) {
            return this;
        }

        // @ts-ignore
        input['user'] && (this.user = (new User()).deserialize(input['user']));

        return this;
    }

}

export default LoginResponse;
