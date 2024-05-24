
const mongoose = require("mongoose");

const addVehicle = mongoose.Schema({
    wheel: { type: Number, required: true },
    type: { type: String, required: true },
    name: { type: String, required: true },
})

const vehicle = mongoose.model("Vehicle", addVehicle);
module.exports = vehicle;