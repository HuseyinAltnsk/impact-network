import React, {Component} from "react";

import {OFFERED_RIDE, REQUESTED_RIDE, COMPANY_RIDE} from "../utils/rideTypes.js";

import ToggleEditFieldArray from './ToggleEditFieldArray';
import {getRide, updateRide, deleteRide} from '../actions';
import './RidePage.css';
import ReactTooltip from 'react-tooltip';

class RidePage extends Component {
    constructor(props) {
        super(props);
        props.dispatch(getRide(props._id))
    }

    render() {
        const ride = this.props.state.displayedRide;
        const user = this.props.state.user;
        const time = new Date(ride.time);
        const timeString = `${time.getHours() % 12}:${time.getMinutes()} ${(time.getHours() >= 12) ? "PM" : "AM"}`;
        let page;
        let seatInfo = "This value indicates the number \nof seats available for this ride.";

        switch (ride.type) {
            case OFFERED_RIDE:
                page = (
                    <div className="jumbotron">
                        <div>
                            <span className="title"> RIDE OFFER FROM:<br/> {ride.owner.firstName}, {ride.owner.lastName} </span>
                        </div>
                        <div className="rideInfo">
                            <span className="rideDestination">TO: {ride.destination}</span>
                        </div>
                        <div>
                            <div>
                                <span className="detail">Meeting Location: {ride.meetingLocation} </span><br/>
                                <span className="detail">Date: {timeString} </span><br/>
                                <span className="detail">Number of Guests: {ride.numGuests} </span><br/>
                                <span className="detail">Seats: {ride.seats} </span>
                                <div><a data-tip="React-tooltip" data-for="infoIconSeats"> INFO </a>
                                <ReactTooltip id="infoIconSeats" place="bottom" type="info" effect="solid">
                                    <span>{seatInfo}</span>
                                </ReactTooltip></div>
                                <span className="detail">Notes: {ride.notes} </span>
                            </div>
                            <div>
                                <span className="rideInfo">About {ride.owner.firstName}</span>
                            </div>
                            <div>
                                <span className="detail">Phone Number: </span><br/>
                                {user.hasVehicle &&
                                <div><span className="detail">Car Make: </span><br/>
                                <span className="detail">Car Model: </span><br/>
                                <span className="detail">Car Color: </span></div>}
                            </div>
                        </div>
                    </div>
                );
                break;
            case REQUESTED_RIDE:
                page = (
                    <div className="jumbotron">
                        <div>
                            <span className="title">RIDE REQUEST FROM {ride.owner.firstName} </span>
                        </div>
                        <div className="rideInfo">
                            <span className="rideDestination">TO: {ride.destination}</span>
                        </div>
                        <div>
                            <div>
                                <span className="detail">Meeting Location: {ride.meetingLocation} </span><br/>
                                <span className="detail">Date: {timeString} </span><br/>
                                <span className="detail">Number of Guests: {ride.numGuests} </span><br/>
                                <span className="detail">Notes: {ride.notes} </span>
                            </div>
                            <div>
                                <span className="rideInfo">About {ride.owner.firstName}</span>
                            </div>
                            <div>
                                <span className="detail">Phone Number: </span><br/>
                            </div>
                        </div>
                    </div>
                );
                break;
            case COMPANY_RIDE:
                page = (
                    <div className="jumbotron">
                        <div>
                            <span className="title">{ride.owner.firstName} WANTS TO SHARE A RIDE</span>
                        </div>
                        <div className="rideInfo">
                            <span className="rideDestination">TO: {ride.destination}</span>
                        </div>
                        <div>
                            <div>
                                <span className="detail">Meeting Location: {ride.meetingLocation} </span><br/>
                                <span className="detail">Date: {timeString} </span><br/>
                                <span className="detail">Number of Guests: {ride.numGuests} </span><br/>
                                <span className="detail">Rideshare Service: {ride.company}</span><br/>
                                <span className="detail">Notes: {ride.notes} </span>
                            </div>
                            <div>
                                <span className="rideInfo">About {ride.owner.firstName}</span>
                            </div>
                            <div>
                                <span className="detail">Phone Number: </span><br/>
                            </div>
                        </div>
                    </div>
                );
                break;
            default:
                page = <div>Unable to view ride.</div>
        }

        let editing;
        let fields = <ToggleEditFieldArray state={this.props.state} onSubmit={(values) => {
            this.props.dispatch(updateRide(values, ride._id, ride._type)).then(window.location.reload())
        }}/>;

        if (user !== undefined && 'rides' in user && ride !== undefined &&
            '_id' in ride && user.rides.includes(ride._id)) {
            editing =
                <div>
                    {fields}
                    <button className="button"
                            onClick={
                                () => {
                                    this.props.dispatch(deleteRide(ride._id, ride.type))
                                        .then(() => {
                                            this.props.history.push("/");
                                        })
                                }
                            }>Delete Ride
                    </button>
                </div>

        }
        return (
            <div>
                {page}
                {editing}
            </div>
        )

    }
}

export default RidePage;
