import Setting from "./Setting";
import ErrorType from "../errors/ErrorType";

class State {

    settings: Setting[]|null = null;
    error: ErrorType|null = null;

}

export default State;
