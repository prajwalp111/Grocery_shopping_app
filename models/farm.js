const mongoose = require('mongoose');
const { Schema } = mongoose;

const farmSchema = new Schema({
    name : {
        type : String,
        require : [true, 'Farm should have name']
    },
    city : {
        type : String,
    },
    email :{
        type : String,
        required : [true, 'Farm should have email address']
    },
    products :[
        {
            type : Schema.Types.ObjectId,
            ref : 'Product'
        }
    ]
})

const Farm = mongoose.model('Farm', farmSchema);

module.exports = Farm;