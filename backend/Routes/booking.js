const express = require("express");
const bookingRoutes = express.Router();
const bookingSchema = require("../Schema/bookingSchema");

bookingRoutes.post("/new_book", async (req, res) => {
    console.log("new booking")
    const data = req.body
    try {

        let from = new Date(data.from);
        let to = new Date(data.to);
        let availiblity = await bookingSchema.find({
            model: data.model,
            $or: [
                { $and: [{ from: { $lte: from } }, { to: { $gte: from } }] }, // Check if booked range starts before or on 'from'
                { $and: [{ from: { $lte: to } }, { to: { $gte: to } }] },     // Check if booked range ends after or on 'to'
                { $and: [{ from: { $gte: from } }, { to: { $lte: to } }] }    // Check if booked range is completely within the given range
            ]
        });
        if (availiblity.length > 0) {
            return res.status(201).json({
                message: "Booking not allowed for following Dates as it is already booked"
            })
        } else {

            const vehicleDetails = new bookingSchema({
                firstname: data.firstname,
                lastname: data.lastname,
                wheel: data.wheel,
                model: data.model,
                from: data.from,
                to: data.to
            })
            vehicleDetails.save(data).then((saved) => {
                res.status(200).json({
                    message: "Data saved Sucessfully",
                    detail: saved
                })
            })
        }
    }

    catch (err) {
        res.status(500).json({
            message: "Internal Server Error"
        })
        console.log(err)
    }
})

// to get booking details of particular model
bookingRoutes.get("/details/:model", (req, res) => {
    console.log("get booking detail by model")
    bookingSchema.find({ model: req.params.model }).then((record) => {
        res.status(200).json({
            message: "Booking fetched Sucessfully",
            data: record
        })
    })
        .catch((err) => {
            res.status(500).json({
                message: "Internal Server Error"
            })
            console.log(err)
        })

})

module.exports = bookingRoutes;