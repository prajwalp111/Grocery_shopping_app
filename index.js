const express = require('express');
const app = express();
const path = require('path');

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.get('/dog', (req, res)=>{
    res.send('woof!!')
})

app.listen(8080, ()=>{
    console.log('listening on port 8080')
})
