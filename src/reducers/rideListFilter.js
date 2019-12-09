import {SET_RIDELIST_FILTER} from '../actions';
import {MY_RIDES} from '../utils/rideTypes';


const rideListFilter = (state = MY_RIDES, action) => {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case SET_RIDELIST_FILTER:
            state = action.filter;
            return state;
        default:
            return state;
    }
};

export default rideListFilter;
