const express = require("express");
const router = new express.Router();
const volunteerController = require('../controller/volunteer');
const { collectHeader } = require('../controller/volunteer')

router.get('/getall', (req,res)=>{
  volunteerController.getAll(req,res)
})

router.get('/get/', (req, res) => {
  collectHeader(req, res)
})

.get('/get/:id',(req,res)=>{
  
})

.post('/add', (req,res)=>{
  volunteerController.addVolun(req,res)
});

module.exports = router;