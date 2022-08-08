const router = require('express').Router()
const Bread = require('../models/breads')

router.get('/',(req,res)=>{
    res.render('Index',
    {
      breads:Bread,
      title:'Index Page'
    }
    )
})

router.get('/:arrayIndex',(req,res)=>{
    const arrayIndex = req.params.arrayIndex
    res.send(Bread[arrayIndex])
})


module.exports = router