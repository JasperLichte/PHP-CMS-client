import ResponseData from "../ResponseData";
import User from "../../../models/User";

class RegisterResponse implements ResponseData {

    public user: User|null = null;

    deserialize(input: {}): RegisterResponse {
        if (!input) {
            return this;
        }

        // @ts-ignore
        input['user'] && (this.user = (new User()).deserialize(input['user']));

        return this;
    }

}

export default RegisterResponse;
