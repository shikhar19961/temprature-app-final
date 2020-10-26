const path=require("path");
const { request, response } = require('express');
const express=require('express');
const app=express();
const router=require('./src/router');
const PORT= process.env.PORT || 3000;
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static("public"));
app.set("views","views");
app.set("view engine","ejs");
app.use("/",router);


app.listen(PORT,()=>{
    console.log(`Express server running on ${PORT}`);
});