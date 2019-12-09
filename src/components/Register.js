import React, {Component} from "react";

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { registerUser } from '../actions';
import RegisterForm from "./RegisterForm";

// https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669
// for implementing the required fields for form fields

class Register extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     user: {
        //         firstName: '',
        //         lastName: '',
        //         username: '',
        //         password: ''
        //     },
        //     submitted: false
        // };


    }

    // handleChange(event) {
    //     const { name, value } = event.target;
    //     const { user } = this.state;
    //     this.setState({
    //         user: {
    //             ...user,
    //             [name]: value
    //         }
    //     });
    // }

    // handleSubmit(event) {
    //     event.preventDefault();

    //     this.setState({ submitted: true });
    //     const { user } = this.state;
    //     if (user.firstName && user.lastName && user.username && user.password) {
    //         this.props.register(user);
    //     }
    // }

    
    render() {
        
        return (
            <div>
                <RegisterForm {...this.props} onSubmit={(values) => {
                    const {dispatch} = this.props;
                    console.log("GOING INTO RegisterForm.js. BELOW IS this.props:");
                    console.log(this.props);
                    dispatch(registerUser(values))
                        .then(() => {
                            this.props.history.push('/') // this is where you'd change hasCompleted registration(?)
                        });
                }
                }/>
            </div>
        )
    
    }
}

export default Register;