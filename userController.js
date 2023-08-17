const path=require('path');
const User=require('./userModel');
exports.postUser= (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    User.create({
        name:name,
        email:email,
        phone:phone
    }
    ).then(result=>{
      console.log(result);
      res.json(result);
    }).catch(err=>{
      console.log(err);
    })
};
exports.getUsers = (req, res, next) => {
  User.findAll().then(results=>{
  res.json(results);
  }).catch(err=>{
    console.log(err);
  })
};
exports.deleteUser = (req, res, next) => {
  const userId=req.params.userId;
  User.findByPk(userId).then(users=>{
    return users.destroy();
  }).then(()=>{
    console.log("Deleted Product...!")
  })
  .catch(err=>{
    console.log(err);
  })
  
};