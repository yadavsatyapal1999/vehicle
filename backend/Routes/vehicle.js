const express = require("express");
const vehicleRouter = express.Router();
const vehicleSchema = require('../Schema/addVehicle');


// For getting Wheelers of different type
vehicleRouter.get("/vh/:wheel", async (req, res) => {

    console.log("Get Wheels");
    const wheels = req.params.wheel;

    try {
        const vehicle = await vehicleSchema.distinct("type", { wheel: wheels });
        // Would return diffrent types of type 
        if (!vehicle) {
            res.status(404).json({
                message: `No any ${wheels} wheelers found`
            })
        }
        res.status(200).json({
            message: "Data found sucessfully",
            data: vehicle
        })
    }
    catch (err) {
        res.status(500).json({
            message: "Internal Server Error Try after some time"
        })
    }

})

// for getting model and availiblity

vehicleRouter.get("/vh1/:type", async (req, res) => {

    console.log("Get types in after wheels")
    const typ = req.params.type;

    try {
        const vehicle = await vehicleSchema.find({ type: typ });
        if (!vehicle) {
            res.status(404).json({
                message: `No any ${typ} found`
            })
        }
        res.status(200).json({
            message: "Data found sucessfully",
            data: vehicle
        })
    }
    catch (err) {
        res.status(500).json({
            message: "Internal Server Error Try after some time"
        })
    }

})

module.exports = vehicleRouter;