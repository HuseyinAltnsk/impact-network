const mongoose = require('mongoose');

// const {OFFERED_RIDE, REQUESTED_RIDE, COMPANY_RIDE} = require("../utils/rideTypes");

let ProjectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            maxlength: 100,
            required: true
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
        // type: {
        //     type: String,
        //     enum: [OFFERED_RIDE, REQUESTED_RIDE, COMPANY_RIDE],
        //     required: true
        // }
    }
);

mongoose.model("Project", ProjectSchema);


      


// date: {
//     type: Date,
//     required: true
// },
// time: {
//     type: Date,
//     required: true
// },
// createdOn: {
//     type: Date,
//     default: new Date(),
//     required: true
// },
// active: {
//     type: Boolean,
//     default: true,
//     required: true
// },