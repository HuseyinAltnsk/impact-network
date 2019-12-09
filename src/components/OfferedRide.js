import React, {Component} from "react";
import {Link} from 'react-router-dom';

import './RideItem.css';

class OfferedRide extends Component {
    render() {
        const ride = this.props;
        const time = new Date(ride.time);
        const timeString = `${time.getHours() % 12}:${time.getMinutes()} ${(time.getHours() >= 12) ? "PM" : "AM"}`;
        return (
            <div className="ride">
                <div className="info">
                    <div className="col">
                        <div className="to">
                            <span>Offered Ride<br/>To: {ride.destination}</span>
                        </div>
                        <div>
                            <span className="bold">Time:</span> {timeString} <br/>
                            <span className="bold">Seats:</span> {ride.seats - (ride.riders.length + ride.numGuests)}
                        </div>
                    </div>
                    <div className="col col2">
                        <div>
                            <span className="bold">Driver:</span><br/> {ride.owner.firstName}
                        </div>
                        <div>
                            <span className="bold">Pickup At:</span><br/> {ride.meetingLocation}
                        </div>
                    </div>
                </div>
                <div className="action">
                    <Link to={`/rides/${ride._id}`}>
                        <button className="buttonRide" >View</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default OfferedRide;
