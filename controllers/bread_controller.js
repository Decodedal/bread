const router = require('express').Router()
const Bread = require('../models/breads')

router.get('/',(req,res)=>{
  //renders a view  
  res.render('Index',
    {
      breads:Bread,
      title:'Index Page'
    }
    )
})

router.get('/:arrayIndex',(req,res)=>{
    const arrayIndex = req.params.arrayIndex
    //sends raw data
    // res.send(Bread[arrayIndex])
    console.log("get request to bread data", Bread[arrayIndex])
    res.render("show",
    {
     bread:Bread[arrayIndex],
     title:"show"
    })
})


module.exports = router