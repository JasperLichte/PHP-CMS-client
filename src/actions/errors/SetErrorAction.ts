import Action from "../Action";
import ActionType from "../ActionType";
import ErrorType from "../../util/errors/ErrorType";

export default interface SetErrorAction extends Action {
    type: ActionType.SET_ERROR,
    error: ErrorType|null,
}
