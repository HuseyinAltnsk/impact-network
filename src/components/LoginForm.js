import React from "react";
import {Field, reduxForm} from 'redux-form'
import {
    TextField
} from 'redux-form-material-ui'


let LoginForm = props => {
    const {handleSubmit} = props;

    return (
       
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    name="username"
                    component={TextField}
                    hintText="Username"
                    floatingLabelText="Username"
                    // ref={this.saveRef}
                    withRef
                />
            </div>
            <div>
                <Field
                    name="password"
                    component={TextField}
                    hintText="Password"
                    floatingLabelText="Password"
                    // ref={this.saveRef}
                    withRef
                />
            </div>
            <button type="submit">Log In</button>
        </form>
    );
}

LoginForm = reduxForm({
    form: 'loginForm'
})(LoginForm);

export default LoginForm;


