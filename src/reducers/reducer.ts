import State from '../util/models/State';
import ActionType from "../actions/ActionType";
import SetSettingsAction from "../actions/settings/SetSettingsAction";
import SetErrorAction from "../actions/errors/SetErrorAction";
import SetUserAction from "../actions/user/SetUserAction";
import SetThemeAction from "../actions/themes/SetThemeAction";

const rootReducer = (
    state: State = new State(),
    action: SetSettingsAction | SetErrorAction | SetUserAction | SetThemeAction
): State => {
    switch(action.type) {
        case ActionType.SET_USER:
            return {...state, user: action.user};
        case ActionType.SET_SETTINGS:
            return {...state, settings: action.settings};
        case ActionType.SET_ERROR:
            return {...state, error: action.error};
        case ActionType.SET_THEME:
            return {...state, theme: action.theme};
    }

    return state;
};

export default rootReducer;
