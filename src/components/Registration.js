import React, {Component} from 'react';
import './Dashboard.css';
import RegistrationForm from "./RegistrationForm";

import {getCurrentUser, register} from '../actions';

class Registration extends Component {

    render() {
        const {user} = this.props.state;
        const isRegistered = ("hasCompletedRegistration" in user && user.hasCompletedRegistration);
        let content;
        if (!isRegistered) {
            content = (
                <RegistrationForm {...this.props}
                                  onSubmit={(values) => {
                                      this.props.dispatch(register(values, this.props.state.user._id))
                                          .then(() => {
                                              this.props.dispatch(getCurrentUser())
                                          })
                                          .then(() => {
                                              this.props.history.push("/");
                                          })
                                  }}/>
            )
        } else {
            content = (
                <div>
                    You are already registered.
                </div>
            )
        }
        return (
            <div>
                {content}
            </div>
        );
    }
}

export default Registration;
