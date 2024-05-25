const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser')
const vehicle = require("./Routes/vehicle");
const booking = require("./Routes/booking");
const app = express();
app.use(cors({}));


app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());


mongoose.connect("mongodb+srv://satyapalmechworld:axN0ykTi1TcZ18ED@cluster0.qkhyapj.mongodb.net/Vehicle_Booking?retryWrites=true&w=majority").then((resp) => {
    console.log('Connected to DB Sucessfully');
    //console.log(resp)
})
    .catch((err) => {
        console.log(err)
    })

app.use("/veh",vehicle);
app.use("/book",booking);
app.listen("12345", () => {
    console.log("Server listening at port 12345")
})