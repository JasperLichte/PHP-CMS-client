import State from '../util/models/State';
import ActionType from "../actions/ActionType";
import SetSettingsAction from "../actions/settings/SetSettingsAction";

const rootReducer = (
    state: State = new State(),
    action: SetSettingsAction
): State => {
    switch(action.type) {
        case ActionType.SET_SETTINGS:
            return {...state, settings: action.settings};
    }

    return state;
};

export default rootReducer;
