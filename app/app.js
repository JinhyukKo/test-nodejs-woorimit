'use strict'
//Module
const express=require('express');
const app = express();

//Variable
const PORT =3000;
//routing
const router = require('./src/routes/home/index')


//setting
app.set('views','./src/views');
app.set('view engine','ejs')




//middleware

app.use(express.static(`${__dirname}/src/public/`));
app.use(express.json())
app.use(express.urlencoded({extended:true})) 
app.use('/',router);

//listen
app.listen(PORT,()=>{
    
    console.log('server on');
})
