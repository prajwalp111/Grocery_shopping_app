const mongoose = require('mongoose');
const Product = require('./product')
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

farmSchema.post('findOneAndDelete', async function(farms){
    
    if(farms.products.length){
        console.log('hello')
        const res = await Product.deleteMany({_id: {$in : farms.products}})
        console.log(res)
    }
})

const Farm = mongoose.model('Farm', farmSchema);

module.exports = Farm;