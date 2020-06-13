import Action from "../Action";
import ActionType from "../ActionType";

export default interface SetAllowMultiRequestsAction extends Action {
    type: ActionType.SET_ALLOW_MULTIREQUESTS,
    allowMultiRequests: boolean,
}
