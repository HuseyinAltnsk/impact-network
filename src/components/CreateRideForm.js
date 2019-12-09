import React from 'react'
import {Field, reduxForm} from 'redux-form'

import {OFFERED_RIDE, COMPANY_RIDE, REQUESTED_RIDE} from '../utils/rideTypes';
import {UBER, LYFT, ANY} from '../utils/companies';

import MenuItem from 'material-ui/MenuItem'

import {
    DatePicker,
    TimePicker,
    SelectField,
    TextField
} from 'redux-form-material-ui'

import {required, guestLimit} from "../utils/validation";

let CreateRideForm = props => {
    const {handleSubmit} = props;
    const form = props.state.form;
    const values = ("createRide" in form) ? form.createRide.values : undefined;
    const {pristine, submitting} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    name="type"
                    component={SelectField}
                    hintText="What do you want to do?"
                    floatingLabelText="What do you want to do?"
                    validate={required}
                >
                    <MenuItem value={OFFERED_RIDE} primaryText="Offer a Ride"/>
                    <MenuItem value={REQUESTED_RIDE} primaryText="Request a Ride"/>
                    <MenuItem value={COMPANY_RIDE} primaryText="Share an Uber or Lyft"/>
                </Field>
            </div>
            <div>
                <Field
                    name="destination"
                    component={TextField}
                    hintText="Destination"
                    floatingLabelText="Destination"
                    validate={required}
                    ref={this.saveRef}
                    withRef
                />
            </div>
            <div>

                <Field
                    name="meetingLocation"
                    component={TextField}
                    hintText="Meeting Location"
                    floatingLabelText="Meeting Location"
                    validate={required}
                    ref={this.saveRef}
                    withRef
                />
            </div>
            <div>
                <Field
                    name="date"
                    component={DatePicker}
                    format={null}
                    hintText="Date"
                    floatingLabelText="Date"
                    validate={required}
                />
            </div>
            <div>
                <Field
                    name="time"
                    component={TimePicker}
                    format={null}
                    hintText="When do you want to leave?"
                    floatingLabelText="When do you want to leave?"
                    validate={required}
                />
            </div>
            <div>
                <Field
                    name="numGuests"
                    component={TextField}
                    hintText="# of Guests"
                    floatingLabelText="# of Guests"
                    validate={required && guestLimit}
                    ref={this.saveRef}
                    withRef
                />
            </div>
            {values !== undefined && values.type === OFFERED_RIDE &&
            <div>
                <Field
                    name="seats"
                    component={TextField}
                    hintText="How many people can you take?"
                    floatingLabelText="How many people can you take?"
                    validate={required}
                    ref={this.saveRef}
                    withRef
                />
            </div>
            }
            {values !== undefined && values.type === COMPANY_RIDE &&
            <div>
                <Field
                    name="company"
                    component={SelectField}
                    hintText="Rideshare Service"
                    floatingLabelText="Rideshare Service"
                    validate={required}
                >
                    <MenuItem value={UBER} primaryText={UBER}/>
                    <MenuItem value={LYFT} primaryText={LYFT}/>
                    <MenuItem value={ANY} primaryText={ANY}/>
                </Field>
            </div>
            }
            <div>
                <Field
                    name="notes"
                    component={TextField}
                    hintText="Notes"
                    floatingLabelText="Notes"
                    multiLine
                    rows={1}
                />
            </div>
            <button type="submit" disabled={pristine || submitting}>
                Create Ride
            </button>
        </form>

    )
};

CreateRideForm = reduxForm({
    form: 'createRide'
})(CreateRideForm);

export default CreateRideForm;
