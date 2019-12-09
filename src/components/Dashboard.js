import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Dashboard.css';
import RideList from "./RideList";
import {
    loadRides,
    setRidelistFilter
} from "../actions";
import {
    MY_RIDES,
    OFFERED_RIDE,
    REQUESTED_RIDE,
    COMPANY_RIDE
} from '../utils/rideTypes';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        props.dispatch(loadRides());
    }

    render() {
        const {dispatch} = this.props;
        return (
            <div className='dashboard'>
                <div className="rides">
                    <h2>Available Rides</h2>
                    <div className="rideButtonGroup">
                        <button className="rideButtonColoring rideButton left noBorderRight"
                                onClick={() => dispatch(setRidelistFilter(MY_RIDES))}>My Rides
                        </button>
                        <button className="rideButtonColoring rideButton noBorderRight"
                                onClick={() => dispatch(setRidelistFilter(OFFERED_RIDE))}>Offered Rides
                        </button>
                        <button className="rideButtonColoring rideButton noBorderRight"
                                onClick={() => dispatch(setRidelistFilter(REQUESTED_RIDE))}>Requested Rides
                        </button>
                        <button className="rideButtonColoring rideButton right"
                                onClick={() => dispatch(setRidelistFilter(COMPANY_RIDE))}>Company Rides
                        </button>
                    </div>
                    <div className="rideList">
                        <RideList {...this.props.state} searchBar={this.props.state.form.searchBar}/>
                    </div>
                </div>
                <div className="options">
                    <Link to="/rides/new">
                        <button className="rideButtonColoring">Create A Ride</button>
                    </Link>
                    <Link to="/myprofile">
                        <button className="rideButtonColoring">My Profile</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Dashboard;
