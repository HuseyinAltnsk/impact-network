import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {reducer as form} from "redux-form";

import rides from './rides';
import rideListFilter from './rideListFilter';
import displayedRide from './displayedRide';
import user from './user';

const reducers = combineReducers({
    rides,
    rideListFilter,
    displayedRide,
    user,
    form
});

export default createStore(reducers, applyMiddleware(thunk));
