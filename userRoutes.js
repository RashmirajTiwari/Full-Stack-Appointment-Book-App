const userController=require('./userController');
const express=require('express');
const router=express.Router();

router.get('/getUsers',userController.getUsers);
router.post('/postUser',userController.postUser);
router.delete('/deleteUser/:userId',userController.deleteUser);
module.exports=router;