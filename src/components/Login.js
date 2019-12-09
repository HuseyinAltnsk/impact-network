import React, {Component} from "react";

import { Link } from 'react-router-dom';

import { loginUser } from '../actions';
import LoginForm from "./LoginForm";

class Login extends Component {

    render() {
        
        return (
            <div>
                <LoginForm {...this.props} onSubmit={(values) => {
                    const {dispatch} = this.props;
                    console.log("GOING INTO LoginForm.js");
                    dispatch(loginUser(values))
                        .then(() => {
                            this.props.history.push('/')
                        });
                }
                }/>
            </div>
        )
    
    }
}

export default Login;