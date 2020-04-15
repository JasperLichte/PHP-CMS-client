import Setting from "./Setting";
import ErrorType from "../errors/ErrorType";
import User from "./User";
import {defaultTheme, Theme} from "../themes/themes";

class State {

    user: User|null = null;
    settings: Setting[]|null = null;
    error: ErrorType|null = null;
    theme: Theme = defaultTheme;

}

export default State;
