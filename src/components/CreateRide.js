import React, {Component} from 'react';

import CreateRideForm from './CreateRideForm';

import {createRide} from '../actions';

class CreateRide extends Component {

    render() {
        return (
            <div>
                <CreateRideForm {...this.props} onSubmit={(values) => {
                    const {start, end, ...rest} = values;
                    const {dispatch} = this.props;
                    console.log("HHHHHH");
                    console.log(this.props);
                    dispatch(createRide({timeRange: {start, end}, owner: this.props.state.user._id, ...rest}))
                        .then(() => {
                            this.props.history.push('/')
                        });
                }
                }/>
            </div>
        )
    }
}

export default CreateRide;
