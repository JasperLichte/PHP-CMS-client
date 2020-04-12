import Setting from "./Setting";
import ErrorType from "../errors/ErrorType";
import User from "./User";

class State {

    user: User|null = null;
    settings: Setting[]|null = null;
    error: ErrorType|null = null;

}

export default State;
