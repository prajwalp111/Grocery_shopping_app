const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(()=>{
        console.log(`Connection to mongo Established`)
    })
    .catch(err =>{
        console.log(`Connectio to mongo not established!!!!!!!!!!!!!1`);
        console.log(err);
    })

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/products',async (req, res)=>{
    const products =await Product.find({});
    console.log(products)
    res.render('products/index', {products})
})

app.get('/products/new', (req, res)=>{
    res.render('products/new');
})

app.post('/products', async(req,res)=>{
    const newProd = new Product(req.body);
    await newProd.save();
    console.log(newProd);
    res.redirect(`/products/${newProd._id}`)
})

app.get('/products/:id', async(req, res)=>{
    const { id } = req.params;
    const products = await Product.findById(id);
    console.log(products)
    res.render('products/show', {products})
})

app.get('/products/:id/edit', async(req, res)=>{
    const { id } = req.params;
    const products = await Product.findById(id);
    res.render('products/edit', {products});
})

app.put('/products/:id', async(req, res)=>{
    const { id } = req.params;
    console.log(req.body)
    const products = await Product.findByIdAndUpdate(id, req.body,{ runValidators:true, new:true});
    res.redirect(`/products/${products._id}`)
})

app.listen(8080, ()=>{
    console.log('listening on port 8080')
})
