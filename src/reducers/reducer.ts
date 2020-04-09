import State from '../util/models/State';
import ActionType from "../actions/ActionType";
import SetSettingsAction from "../actions/settings/SetSettingsAction";
import SetErrorAction from "../actions/errors/SetErrorAction";

const rootReducer = (
    state: State = new State(),
    action: SetSettingsAction | SetErrorAction
): State => {
    switch(action.type) {
        case ActionType.SET_SETTINGS:
            return {...state, settings: action.settings};
        case ActionType.SET_ERROR:
            return {...state, error: action.error};
    }

    return state;
};

export default rootReducer;
