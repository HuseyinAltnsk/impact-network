import React, {Component} from 'react';
import {OFFERED_RIDE, REQUESTED_RIDE, COMPANY_RIDE, MY_RIDES} from "../utils/rideTypes.js";

import OfferedRide from './OfferedRide';
import RequestedRide from './RequestedRide';
import CompanyRide from './CompanyRide';
import SearchBar from './SearchBar';


class RideList extends Component {
    render() {
        const {searchBar, ...state} = this.props;
        const user = this.props.user;
        const searchValue = (searchBar !== undefined && "values" in searchBar) ? searchBar.values.search : "";
        const filteredRides = state.rides.filter(ride => {
            if (state.rideListFilter === MY_RIDES) {
                return ride.owner._id === user._id &&
                    ride.destination.toLowerCase().includes(searchValue.toLowerCase());
            }
            return ride.type === state.rideListFilter &&
                ride.destination.toLowerCase().includes(searchValue.toLowerCase());
        });
        let content = <span>No Results.</span>;
        if (filteredRides.length > 0) {
            content = filteredRides.map((ride) => {
                switch (ride.type) {
                    case OFFERED_RIDE:
                        return (
                            <OfferedRide key={ride._id} {...ride}/>
                        );
                    case REQUESTED_RIDE:
                        return (
                            <RequestedRide key={ride._id} {...ride}/>
                        );
                    case COMPANY_RIDE:
                        return (
                            <CompanyRide className="shadow" key={ride._id} {...ride}/>
                        );
                    default:
                        return null;
                }
            })
        }
        return (
            <div>
                <SearchBar onSubmit={() => {}}/>
                {content}
            </div>
        )
    }
}

export default RideList;
