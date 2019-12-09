// Actions
export const LOAD_RIDES = "LOAD_RIDES";
export const SET_RIDELIST_FILTER = "SET_RIDELIST_FILTER";
export const UPDATE_RIDE = "UPDATE_RIDE";
export const DELETE_RIDE = "DELETE_RIDE";
export const GET_RIDE = "GET_RIDE";
export const GET_CURRENT_USER = "GET_CURRENT_USER";
export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";
export const CREATE_RIDE = "CREATE_RIDE";


// Action Creators
export const loginUserAction = (values) => {    
    console.log("loginUserAction : values");    
    console.log(values);    
    return {
        type: LOGIN,
        values
    }
}
export const registerAction = (values) => {
    return {
        type: REGISTER,
        values
    }
};


// Thunks
export const loginUser = (values) => {

    console.log("loginUser : values");
      
    return (dispatch) => {
        return fetch("/user/login", {
            method: "POST",
            body: JSON.stringify({
                values: values
            }),
            headers: {"content-type": "application/json"},
            credentials: "include"
        }).then((result) => result.json())
          .then((values) => dispatch(loginUserAction(values)) );
    }
};

export const registerUser = (values) => {
    // console.log(values)
    return (dispatch) => {
        return fetch("/user/register", {
            method: "POST",
            body: JSON.stringify({
                values: values
            }),
            headers: {"content-type": "application/json"},
            credentials: "include"
        }).then(() => dispatch(registerAction(values)) );
    }
};




// Action Creators
export const loadRidesAction = (rides) => {
    return {
        type: LOAD_RIDES,
        rides
    }
};

export const setRidelistFilterAction = (filter) => {
    return {
        type: SET_RIDELIST_FILTER,
        filter
    }
};

export const updateRideAction = (values, _id, type) => {
    return {
        type: UPDATE_RIDE,
        ride: {
            _id,
            type,
            values
        }
    }
};

export const getRideAction = ride => {
    return {
        type: GET_RIDE,
        ride
    }
};

export const deleteRideAction = (_id, type) => {
    return {
        type: DELETE_RIDE,
        ride: {
            _id,
            type
        }
    }
};

export const getCurrentUserAction = (user) => {
    return {
        type: GET_CURRENT_USER,
        user
    }
};

// export const registerAction = (values) => {
//     return {
//       type: REGISTER,
//         values
//     }
// };

export const createRideAction = () => {
    return {
        type: CREATE_RIDE
    }
};

// Actions
export const setRidelistFilter = (filter) => {
    return setRidelistFilterAction(filter);
};

// Thunks
export const loadRides = () => {
    return dispatch => {
        return fetch("/rides/all", {credentials: "include"}).then((result) => result.json())
            .then((rides) => {
                dispatch(loadRidesAction(rides))
            })
    }
};

export const getRide = (_id) => {
    return dispatch => {
        return fetch(`/rides/info/${_id}`, {credentials: "include"}).then(result => result.json())
            .then(ride => {
                dispatch(getRideAction(ride))
            })
    }
};

export const deleteRide = (_id, type) => {
    return (dispatch) => {
        return fetch("/rides", {
            method: "DELETE",
            body: JSON.stringify({
                _id,
                type
            }),
            headers: {"content-type": "application/json"},
            credentials: "include"
        }).then(() => dispatch(deleteRideAction(_id, type)));
    }
};

export const updateRide = (values, _id, type) => {
    return (dispatch) => {
        return fetch("/rides", {
            method: "PUT",
            body: JSON.stringify({
                values,
                _id,
                type
            }),
            headers: {"content-type": "application/json"},
            credentials: "include"
        }).then(() => dispatch(updateRideAction(values, _id, type)))
    }
};

export const getCurrentUser = () => {
    return dispatch => {
        return fetch('/user/current', {credentials: "include"}).then(result => result.json())
            .then(user => {
                dispatch(getCurrentUserAction(user))
            });
    }
};

// export const register = (values, _id) => {
//     const {phoneNumber, hasVehicle} = values;
//     let info;
//     if (hasVehicle) {
//         const {make, model, color} = values;
//         info = {
//             vehicle: {make, model, color},
//             hasCompletedRegistration: true,
//             phoneNumber,
//             hasVehicle
//         };
//     } else {
//         info = {
//             vehicle: {},
//             hasCompletedRegistration: true,
//             phoneNumber,
//             hasVehicle
//         };
//     }
//     return (dispatch) => {
//         return fetch("/user", {
//             method: "PUT",
//             body: JSON.stringify({
//                 values: info,
//                 _id
//             }),
//             headers: {"content-type": "application/json"},
//             credentials: "include"
//         }).then(() => dispatch(registerAction(values)));
//     }
// };

export const createRide = (ride) => {
    return (dispatch) => {
        return fetch("/rides", {
            method: "POST",
            body: JSON.stringify(ride),
            headers: {"content-type": "application/json"},
            credentials: "include"
        }).then(() => dispatch(loadRides()));
    }
};