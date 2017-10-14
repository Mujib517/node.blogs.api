var express=require('express');
var router=express.Router();

var userCtrl=require('../controllers/user.ctrl');

//GET /users/
router.get('/', userCtrl.get);
//GET /users/1
router.get('/:id',userCtrl.getById);
//POST /users/
router.post('/',userCtrl.save);
router.delete('/:id',userCtrl.delete);

module.exports=router;