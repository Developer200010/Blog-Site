const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    reference : {
        type: String,
        required: true,
    }
})