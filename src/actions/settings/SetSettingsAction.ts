import Action from "../Action";
import ActionType from "../ActionType";
import Setting from "../../util/models/Setting";

export default interface SetSettingsAction extends Action {
    type: ActionType.SET_SETTINGS,
    settings: Setting[]|null,
}
