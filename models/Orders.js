const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;


const ordersSchema = new Schema({

        createdAt: {
            type: Number
        },

        user: {
            type: String,
            trim: true,
        },

        items: [{
            id: {
                type: mongoose.Schema.ObjectId,
                ref: 'Items',
                required: 'El item es Obligarorio'
            },
            qty: Number
        }],

        updatedAt: {
            type: Number,
        },

        state: {
            type: String,
            lowercase: true,
            trim: true,
        }

    },

    {
        versionKey: false
    });


//AGREGA LA FECHA ACTUAL AL CREAR UN ITEM
ordersSchema.pre('save', function (next) {
    //Agrega la fecha de creacion
    const create = Date.now();
    this.createdAt = create;
    this.state = "pendiente";

    next();
});




module.exports = mongoose.model('Order', ordersSchema);