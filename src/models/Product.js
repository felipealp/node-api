const mongoose = require('mongoose')

//Registrando model na aplicação
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    description:{
        type: String,
        required: true
    },

    url:{
        type: String,
        required: true
    },

    createdAt:{
        type: Date,
        default: Date.now
    }

})

//Exporta o model
mongoose.model('Product', ProductSchema)