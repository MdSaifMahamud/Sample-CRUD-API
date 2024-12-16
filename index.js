const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Product=require('./models/product.model.js')
const productRoute=require("./routes/product.route.js");
app.use(express.json());

app.use("/api/products",productRoute);



app.get('/',(req,res)=>{
    res.send("HELLO FROM NODEAPI SERVER Update");
});

mongoose.connect('mongodb://localhost:27017/First')
  .then(() => {
    console.log('Connected!')
    app.listen(3000,()=>{
        console.log("Server in running");
    });
});