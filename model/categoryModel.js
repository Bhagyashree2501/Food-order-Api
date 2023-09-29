const mongoose = require('mongoose')
const CategorySchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
    },{
    collections: "category",
    timeStamps: true
    
    })

    module.exports = mongoose.model("Category", CategorySchema)