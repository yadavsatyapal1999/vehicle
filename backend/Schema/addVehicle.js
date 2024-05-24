
const mongoose = require("mongoose");

const addVehicle = mongoose.Schema({
    type:{type:String,required:true},
    name:{type:String,required:true},
    availiblity:{type:Boolean ,required:true}
})

const vehicle =mongoose.model("Vehicle",addVehicle);
module.exports = vehicle;