const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            maxlength: 100,
            required: true
        },
        lastName: {
            type: String,
            maxlength: 100,
            required: true
        },
        username: {
            type: String,
            maxlength: 100,
            required: true
        },
        password: {
            type: String,
            maxlength: 100,
            required: true
        },
        projects: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Project",
            default: [],
            required: true
        }],

    }
)
// console.log("........");
mongoose.model("User", UserSchema);


//add email, phone number, contactPreference etc

// ,
//         email: {
//             type: String,
//             maxlength: 100,
//             required: true
//         },
