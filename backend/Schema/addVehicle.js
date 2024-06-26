
const mongoose = require("mongoose");

const addVehicle = mongoose.Schema({
    wheel: { type: Number, required: true },
    type: { type: String, required: true },
    model: { type: String, required: true, unique:true },
})

const vehicle = mongoose.model("Vehicle", addVehicle);
module.exports = vehicle;