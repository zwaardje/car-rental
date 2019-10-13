import { LOCAL_STORAGE } from '../constants/defaults';

export const saveState = (state, version) => {
    if (window.localStorage) {
        state.system.version = version;
        const serializedState = JSON.stringify(state);
        window.localStorage.setItem(LOCAL_STORAGE.KEY, serializedState);
    }
};

export const loadState = (initialState, version) => {
    if (window.localStorage) {
        const serializedState = window.localStorage.getItem(LOCAL_STORAGE.KEY);
        if (serializedState && serializedState !== 'undefined') {
            const state = JSON.parse(serializedState);

            if (state.system && state.system.version === version) {
                state.system.restored = true;
                return state;
            }
        }
    }
    return initialState;
};

export const deleteState = () => {
    if (window.localStorage) {
        window.localStorage.removeItem(LOCAL_STORAGE.KEY);
    }
};
