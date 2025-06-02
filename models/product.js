const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true,
        min:0
    },
    category:{
        type:String,
        lowercase:true,
        enum : ['fruits', 'vegetables', 'dairy']
    },
    farms : {
        type : Schema.Types.ObjectId,
        ref : 'Farm'
    }
})

const Product = mongoose.model('Product', productSchema); // therefore collection name is 'products'

module.exports = Product;