import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import packageJson from '../../package.json';

import createRootReducer from '../reducers';
import { saveState, loadState } from '../helpers/store';
import { debounce } from '../helpers/debounce';

export const history = createBrowserHistory();

declare var module: {
    hot: {
        accept(path?: string, callback?: () => void): void;
    };
};

declare var window: {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
};

export default function configureStore() {

    const { version } = packageJson;

    const routMiddleware = routerMiddleware(history);

    const middleware = applyMiddleware(
        routMiddleware,
    );

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const initialState = loadState({}, version);

    const store = createStore(
        createRootReducer(history),
        initialState,
        composeEnhancers(middleware),
    );

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    const saveStore = debounce(500, () => saveState(store.getState(), version));

    store.subscribe(saveStore);

    return store;
}
