const mongoose = require("mongoose");

const productSchema = ({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    price: {
        type: String,
        required: true
    },
    rom_ram: {
        type: String,
        required: true
    },
    battery: {
        type: String,
        required: true
    },
    display: {
        type: String,
        required: true
    },
    camera: {
        type: String,
        required: true
    },
    processor:{
        type: String,
        required: true
        
    },
    quantity: {
        type: Number,
        required: true

    },
    image: {
        type: String,
        require: true

    },
    description: {
        type: String,
        required: true
    },
    createBy: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
        required: true
    },


})
module.exports = mongoose.model("phoneProduct", productSchema)
