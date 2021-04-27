const express = require("express");
const router = new express.Router();
const volunteerController = require('../controller/volunteer');

router.get('/getall', (req,res)=>{
  volunteerController.getAll(req,res)
})
.get('/get/:id',(req,res)=>{

})
.post('/add', (req,res)=>{
  volunteerController.addVolun(req,res)
});

module.exports = router;