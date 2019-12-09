import {
    LOAD_RIDES,
    CREATE_RIDE
} from '../actions';

const rides = (state = [], action) => {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case LOAD_RIDES:
            state = action.rides;
            return state;
        case CREATE_RIDE:
            return state;
        default:
            return state;
    }
};

export default rides;
