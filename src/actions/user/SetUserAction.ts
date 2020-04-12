import Action from "../Action";
import ActionType from "../ActionType";
import User from "../../util/models/User";

export default interface SetUserActionAction extends Action {
    type: ActionType.SET_USER,
    user: User|null,
}
