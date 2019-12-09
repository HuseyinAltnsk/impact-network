import React from "react";
import {Field, reduxForm} from 'redux-form'
import {
    TextField,
    Toggle
} from 'redux-form-material-ui'


let RegisterForm = props => {
    const {handleSubmit} = props;

    return (
       
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    name="firstName"
                    component={TextField}
                    hintText="First Name"
                    floatingLabelText="First Name"
                    // ref={this.saveRef}
                    withRef
                />
            </div>
            <div>
                <Field
                    name="lastName"
                    component={TextField}
                    hintText="Last Name"
                    floatingLabelText="Last Name"
                    // ref={this.saveRef}
                    withRef
                />
            </div>
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
            <button type="submit">Finish Registration</button>
        </form>
    );
}

RegisterForm = reduxForm({
    form: 'registerForm'
})(RegisterForm);

export default RegisterForm;



 // <form name="form" onSubmit={handleSubmit}>
        //     <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
        //         <label htmlFor="firstName">First Name</label>
        //         <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={this.handleChange} />
        //         {submitted && !user.firstName &&
        //             <div className="help-block">First Name is required</div>
        //         }
        //     </div>
        //     <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
        //         <label htmlFor="lastName">Last Name</label>
        //         <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={this.handleChange} />
        //         {submitted && !user.lastName &&
        //             <div className="help-block">Last Name is required</div>
        //         }
        //     </div>
        //     <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
        //         <label htmlFor="username">Username</label>
        //         <input type="text" className="form-control" name="username" value={user.username} onChange={this.handleChange} />
        //         {submitted && !user.username &&
        //             <div className="help-block">Username is required</div>
        //         }
        //     </div>
        //     <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
        //         <label htmlFor="password">Password</label>
        //         <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
        //         {submitted && !user.password &&
        //             <div className="help-block">Password is required</div>
        //         }
        //     </div>
        //     <div className="form-group">
        //         <button className="btn btn-primary">Register</button>
        //         {registering && 
        //             <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
        //         }
        //         {/* <Link to="/login" className="btn btn-link">Cancel</Link> */}
        //     </div>
        //     <button type="submit">Finish Registration</button>
        // </form>