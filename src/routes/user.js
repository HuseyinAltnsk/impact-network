const router = require("express").Router();
const User = require("mongoose").model("User");
const mongoose = require("mongoose");

// Get current user
router.get("/current", (req, res) => {
    res.send(req.user);
});

// // Update user
// router.put("/", (req, res) => {
//     User.findByIdAndUpdate(req.body._id, req.body.values).then(() => {
//         res.sendStatus(200);
//     });
// });


// Login
router.post("/login", (req, res) => {
    
    const {username, password} = req.body.values;
    console.log("req.body :   ")
    console.log(username, password)
    let select = '_id firstName lastName username';

    User.find({username: username, password: password}, select, (err, user) => {
        if (err) res.sendStatus(500);
        else res.send(user);
    });
    
});

// Register user
router.post("/register", (req, res) => {
    console.log("INSIDE THE register route")
    
        const _userId = mongoose.Types.ObjectId();
        const {values} = req.body;
        console.log(values)
        const {firstName, lastName, username, password} = values;
        const user = new User({
            _id: _userId,
            firstName: firstName,
            lastName: lastName,
            username: username,
            password: password
        });
        console.log(user)
        //Save the course id in this professor's list of courses
        user.save((err, obj) => {
            res.sendStatus(200);
        });
   

});

module.exports = router;
