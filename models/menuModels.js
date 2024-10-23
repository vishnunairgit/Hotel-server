const mongoose = require('mongoose')
const menuSchema = mongoose.Schema({

    FoodTitle: {
        type: String,
        required: true

    },
    Amount: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
    },
    Includes: {
        type: String,
        required: true,
    },
    TypeOff: {
        type: String,
        required: true,
    }
})

const menu = mongoose.model('menu', menuSchema)
module.exports = menu