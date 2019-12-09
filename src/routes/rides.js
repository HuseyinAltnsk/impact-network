const router = require("express").Router();
const Ride = require("mongoose").model("Ride");
const User = require("mongoose").model("User");

// Get all rides
router.get("/all", (req, res) => {
    Ride.find({}).populate("owner").exec((err, result) => {
        res.send(result);
    });
});

// Get a specific ride
router.get("/info/:id", (req, res) => {
    console.log("HERE");
    Ride.findById(req.params.id).populate("owner").exec((err, result) => {
        res.send(result);
    });
});

// Create a specific ride
router.post("/", ((req, res) => {
    const ride = new Ride(req.body);
    console.log(ride);
    ride.save((err, ride) => {
        console.log(err, ride);
        User.findByIdAndUpdate(ride.owner, {
            $push: {
                rides: ride._id
            }
        }).then(() => {
            res.sendStatus(200);
        });
    });
}));

// Delete a ride
// TODO: Remove ride from owner's list of rides
router.delete("/", (req, res) => {
    Ride.findByIdAndDelete(req.body._id, (err, ride) => {
        res.sendStatus(200);
    });
});

// Update ride
router.put("/", (req, res) => {
    Ride.findByIdAndUpdate(req.body._id, req.body.values).then(() => {
        res.sendStatus(200);
    });
});

module.exports = router;
