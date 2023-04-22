'use strict'
const express=require('express');
const app = express();
const PORT =3000;

//routing
const router = require('./src/routes/home/index')


//setting
app.set('views','./views');
app.set('view engine','ejs')



//middleware
app.use('/',router);


//listen
app.listen(PORT,()=>{
    
    console.log('server on');
})
