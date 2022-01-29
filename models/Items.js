const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;


const itemsSchema = new Schema({

        image: {
            type: String,
            lowercase: true,
            trim: true,
        },

        updatedAt: {
            type: Number
        },

        createdAt: {
            type: Number
        },

        price: {
            type: Number,
            trim: true,
        },

        description: {
            type: String,
        },

        name: {
            type: String,
            lowercase: true,
            trim: true,
        }

    },

    {
        versionKey: false
    });

//AGREGA LA FECHA ACTUAL AL CREAR UN ITEM
itemsSchema.pre('save', function (next) {
    //Agrega la fecha de creacion
    const create = Date.now();
    this.createdAt = create;
    next();
});

module.exports = mongoose.model('Items', itemsSchema);