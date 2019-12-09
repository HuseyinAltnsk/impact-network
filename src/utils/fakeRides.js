const mongoose = require('mongoose');
const faker = require('faker');
const env = require('dotenv').config();
require('../models');

const Ride = require("mongoose").model("Ride");

mongoose.connect(process.env.MONGODB_URL);

for (let i = 0; i < 1; i++) {
    const ride = new Ride({
        destination: faker.address.streetAddress(),
        timeRange: {
            start: faker.date.future(),
            end: faker.date.future()
        },
        meetingLocation: faker.address.streetAddress(),
        riders: [],
        owner: "5b34d6cc83834520503fb192",
        seats: 3,
        numGuests: 2,
        createdOn: faker.date.recent(),
        numGuests: 2,
        type: "REQUESTED_RIDE"
    });
    ride.save();
}
