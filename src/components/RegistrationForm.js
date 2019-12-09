import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {
    TextField,
    Toggle
} from 'redux-form-material-ui'
import {normalizePhone} from '../utils/normalize';
import {required} from "../utils/validation";

let RegistrationForm = props => {
    const {handleSubmit} = props;
    const form = props.state.form;
    const showRegistrationFields = "registrationForm" in form &&
        "values" in form.registrationForm &&
        "hasVehicle" in form.registrationForm.values &&
        form.registrationForm.values.hasVehicle;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    name="phoneNumber"
                    component={TextField}
                    hintText="Phone Number"
                    floatingLabelText="Phone Number"
                    normalize={normalizePhone}
                    validate={required}
                    ref={this.saveRef}
                    withRef
                />
            </div>
            <div>
                <Field
                    name="hasVehicle"
                    component={Toggle}
                    label="I want to offer rides."
                    labelPosition="right"
                />
            </div>
            {showRegistrationFields &&
            <div>
                <div>
                    <Field
                        name="make"
                        component={TextField}
                        hintText="Vehicle Make"
                        floatingLabelText="Vehicle Make"
                        validate={required}
                        ref={this.saveRef}
                        withRef
                    />
                </div>
                <div>
                    <Field
                        name="model"
                        component={TextField}
                        hintText="Vehicle Model"
                        floatingLabelText="Vehicle Model"
                        validate={required}
                        ref={this.saveRef}
                        withRef
                    />
                </div>
                <div>
                    <Field
                        name="color"
                        component={TextField}
                        hintText="Vehicle Color"
                        floatingLabelText="Vehicle Color"
                        validate={required}
                        ref={this.saveRef}
                        withRef
                    />
                </div>
            </div>
            }
            <button type="submit">Finish Registration</button>
        </form>
    )
};

RegistrationForm = reduxForm({
    form: 'registrationForm'
})(RegistrationForm);

export default RegistrationForm;
