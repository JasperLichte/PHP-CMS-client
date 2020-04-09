import State from "../util/models/State";
import Setting from "../util/models/Setting";

type Selector<T> = (state: State) => T;

export const stateSelector: Selector<State> = state => state;
export const settingsSelector: Selector<Setting[]|null> = state => state.settings;
