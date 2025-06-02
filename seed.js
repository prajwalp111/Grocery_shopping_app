// // this file runs whenever the main file runs and record the data in mongoDB
// const mongoose = require('mongoose');

// const Product = require('./models/product');

// mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
//     .then(()=>{
//         console.log(`Connection to mongo Established`)
//     })
//     .catch(err =>{
//         console.log(`Connectio to mongo not established!!!!!!!!!!!!!1`);
//         console.log(err);
//     })

    
// // const p = new Product({
// //         name:'Prajwal',
// //         price: 20,
// //         category:'fruit'
// // })

// // p.save()
// //     .then(p=>{
// //         console.log(p);
// //     })
// //     .catch(e=>{
// //         console.log(e)
// //     })

// const seedProducts = [
//   { name: 'berry', price: 20, category: 'fruit' },
//   { name: 'Apple', price: 15, category: 'fruit' },
//   { name: 'Carrot', price: 10, category: 'vegetables' },
//   { name: 'Milk', price: 25, category: 'dairy' },
//   { name: 'Banana', price: 12, category: 'fruit' },
//   { name: 'Spinach', price: 8, category: 'vegetables' },
//   { name: 'Cheese', price: 40, category: 'dairy' },
//   { name: 'Mango', price: 30, category: 'fruit' },
//   { name: 'Cabbage', price: 14, category: 'vegetables' },
//   { name: 'Yogurt', price: 22, category: 'dairy' }
// ];


// Product.insertMany(seedProducts)
//     .then(res=>{
//         console.log(res);
//     })
//     .catch(e=>{
//         console.log(e)
//     })