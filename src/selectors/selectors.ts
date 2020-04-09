import State from "../util/models/State";
import Setting from "../util/models/Setting";
import ErrorType from "../util/errors/ErrorType";

type Selector<T> = (state: State) => T;

export const stateSelector: Selector<State> = state => state;
export const settingsSelector: Selector<Setting[]|null> = state => state.settings;
export const errorSelector: Selector<ErrorType|null> = state => state.error;
