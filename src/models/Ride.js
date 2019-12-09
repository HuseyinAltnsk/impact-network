const mongoose = require('mongoose');

const companies = require("../utils/companies");
const {OFFERED_RIDE, REQUESTED_RIDE, COMPANY_RIDE} = require("../utils/rideTypes");

let RideSchema = new mongoose.Schema(
    {
        destination: {
            type: String,
            maxlength: 100,
            required: true
        },
        meetingLocation: {
            type: String,
            maxlength: 100,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        time: {
            type: Date,
            required: true
        },
        riders: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: [],
            required: true
        }],
        numGuests: {
            type: Number,
            min: 0,
            default: 0,
            required: true
        },
        seats: {
            type: Number,
            min: 0
        },
        company: {
            type: String,
            enum: [companies.UBER, companies.LYFT, companies.ANY],
        },
        notes: {
            type: String,
            default: "None.",
            required: true
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        active: {
            type: Boolean,
            default: true,
            required: true
        },
        createdOn: {
            type: Date,
            default: new Date(),
            required: true
        },
        type: {
            type: String,
            enum: [OFFERED_RIDE, REQUESTED_RIDE, COMPANY_RIDE],
            required: true
        }
    }
);

mongoose.model("Ride", RideSchema);
