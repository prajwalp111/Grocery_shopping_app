const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const Product = require('./models/product');
const categories = ['fruits', 'vegetables', 'dairy'];
const AppError = require('./AppError')

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
    const {category} = req.query;
    if (category){
    const products =await Product.find({category});
    res.render('products/index', {products, category})
    }else {
    const products =await Product.find({});
    res.render('products/index', {products , category : 'All'})
    }

})

app.get('/products/new', (req, res)=>{
    res.render('products/new',{categories});
})

app.post('/products', async(req,res,next)=>{
    try{
        const newProd = new Product(req.body);
        await newProd.save();
        res.redirect(`/products/${newProd._id}`)
    }catch(e){
        next(e)
    }
})

app.get('/products/:id', async(req, res, next)=>{
    try{
        const { id } = req.params;
        const products = await Product.findById(id);
        if(!products){
            throw new AppError('the product doesnt exist ', 404);
        }
        console.log(products)
        res.render('products/show', {products})
    }catch(e){
        next(e)
    }
})

app.get('/products/:id/edit', async(req, res, next)=>{
    try{
        const { id } = req.params;
        const products = await Product.findById(id);
        if(!products){
            throw new AppError('the product doesnt exist ', 404);
        }
        res.render('products/edit', {products, categories});
    }catch(e){
        next(e);
    }
})

app.put('/products/:id', async(req, res)=>{
    const { id } = req.params;
    console.log(req.body)
    const products = await Product.findByIdAndUpdate(id, req.body,{ runValidators:true, new:true});
    res.redirect(`/products/${products._id}`)
})

app.delete('/products/:id',async (req, res)=>{
    const { id } = req.params;
    const deleteProduct = await Product.findByIdAndDelete(id);
    res.redirect(`/products`);
})

app.use((err, req, res, next)=>{
    const { status=500, message="this can't be happening ERRRROOOORRRRRRR!!!!!"} =  err;
    res.status(status).send(message);

})

app.listen(8080, ()=>{
    console.log('listening on port 8080')
})
