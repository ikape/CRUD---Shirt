const mongoose = require("mongoose")
const Schema = mongoose.Schema

const shirtsSchema = new Schema({
    item: {
        type: String,
        required: true,
    },
    color:{
        type: String,
        required: true,
    },
    quantity:{
        type: Number,
        required: true,
    },
    available:{
        type: Boolean,
        required: true,
    }
})
module.exports = mongoose.model("Shirt", shirtsSchema)