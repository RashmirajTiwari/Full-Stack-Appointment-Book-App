const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');
const app=express();
const cors = require('cors');
app.use(cors());
const postUser=require('./userRoutes');
const sequelize=require('./database');
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'/public')));
app.use(postUser);
sequelize.sync().then(result=>{
    app.listen(3000);
}).catch(err=>{
    console.log(err);
})