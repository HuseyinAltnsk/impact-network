import React, {Component} from 'react';

class MyProfile extends Component {

    render() {
        let user = this.props.state.user;
        return (
            <div className="profile">
                <div className="user">
                    <h1>{user.firstName}, {user.lastName}</h1>
                </div>
                <div className="details">
                    <fieldset>
                        <legend>{user.title}</legend>
                        <p>E-mail: {user.email}</p>
                        <p>Phone Number: {user.phoneNumber}</p>
                        <p>Car Info:</p>
                        <div className="car">
                            <p>Car Make: </p>
                            <p>Car Model: </p>
                            <p>Car Color: </p>
                        </div>
                    </fieldset>
                </div>
            </div>
        )
    }
}


export default MyProfile;
