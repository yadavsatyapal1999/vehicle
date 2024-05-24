const mongoose = require("mongoose");

const book = mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    wheels: { type: Number, required: true },
    model:{type:String,required:true},
    from: { type: Date, required: true },
    to: { type: Date, required: true }
})

const Booking = mongoose.model("Booking",book);
module.exports = Booking;