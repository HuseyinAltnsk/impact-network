import {
    GET_RIDE
} from '../actions';

const displayedRide = (state = {}, action) => {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case GET_RIDE:
            state = action.ride;
            return state;
        default:
            return state;
    }
};

export default displayedRide;
