import React from 'react';
import {Field, FieldArray, reduxForm} from 'redux-form';

import "./Form.css";
import {OFFERED_RIDE, COMPANY_RIDE} from "../utils/rideTypes.js";
import {UBER, LYFT, ANY} from '../utils/companies';
import {
    DatePicker,
    TimePicker,
    SelectField,
    TextField
} from 'redux-form-material-ui';
import {required, guestLimit} from "../utils/validation";

const renderMembers = ({fields, meta: {error, submitFailed, pristine, submitting}, reset, ride}) => (
    <div>
        <button type="button" onClick={() => fields.length < 1 && fields.push({})}>Edit Ride</button>
        {submitFailed && error && <span>{error}</span>}
        {fields.map((member, index) => (
            <div>
                <div className="details">
                    <label>Meeting Location</label>
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
                </div>
                <div className="details">
                    <label>Date</label>
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
                </div>
                <div className="details">
                    <label>Time</label>
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
                </div>
                <div className="details">
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
                </div>
                {ride !== undefined && ride.type === OFFERED_RIDE &&
                <div className="details">
                    <label>Seats</label>
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
                <button className="button" type="submit" disabled={pristine || submitting}>Apply</button>
                <button type="button" title="Cancel" onClick={() => {
                    reset();
                }}>Cancel</button>
            </div>
        ))}
    </div>
);

const ToggleEditFieldArray = props => {
    const {handleSubmit, pristine, reset, submitting} = props;
    let ride = props.state.displayedRide;

    return (
        <form onSubmit={handleSubmit}>
            <FieldArray name="members" component={renderMembers} reset={reset} ride={ride}/>
        </form>
    );
};

export default reduxForm({
    form: 'fieldArrays', // a unique identifier for this form
})(ToggleEditFieldArray);
