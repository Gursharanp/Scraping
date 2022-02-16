const express=require('express');
const inputRouter = require('./Controller/inputController');

const app=express();
app.use(express.json());

app.use('/',inputRouter);

app.listen(8080,()=>{
    console.log('Server is runing on port 8080')
})