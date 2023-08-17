const Sequelize=require('sequelize');
const sequelize=require('./database')
const User=sequelize.define('User',{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  name:Sequelize.STRING,
  email:Sequelize.STRING,
  phone:Sequelize.INTEGER
})
module.exports=User;