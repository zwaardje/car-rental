import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { rentals } from './rentals';

export default history => combineReducers({
    rentals,
    router: connectRouter(history),
});
