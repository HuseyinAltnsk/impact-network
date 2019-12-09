import {
    GET_CURRENT_USER,
    REGISTER,
    LOGIN
} from '../actions';

const user = (state = {}, action) => {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case GET_CURRENT_USER:
            state = action.user;
            return state;
        case LOGIN:
            console.log("IN REDUCER")
            console.log(action);
            state = (action.values.length !== 0) ? action.values[0] : {};
            return state;
        case REGISTER:
            //state.hasCompletedRegistration = true;
            const {firstName, lastName, username} = action.values;
            state = {firstName, lastName, username};
            return state;
        default:
            return state;
    }
};

export default user;
