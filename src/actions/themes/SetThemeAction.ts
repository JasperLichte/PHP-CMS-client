import Action from "../Action";
import ActionType from "../ActionType";
import {Theme} from "../../util/themes/themes";

export default interface SetThemeAction extends Action {
    type: ActionType.SET_THEME,
    theme: Theme,
}
