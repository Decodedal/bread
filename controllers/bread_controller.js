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

//post rrequest to /breads
router.post("/",(req,res)=>{
  console.log("got a post request to /breads",req.body)
  let newBread = req.body
  //if has gluten is defined
  if(newBread.hasGluten === 'true'){
    newBread.hasGluten = 'true'
  }else{
    //assume it does not have gluten
    newBread.hasGluten = 'false'
    //in a real app dont assume throw a 400//res.(400).send("error must define gluten")
  }
  //insert the bread
  Bread.push(newBread)
  // res.send({'message':'created a new bread',newBread})
  //redirect to the breads index
  res.redirect("/breads")

})

//view to create new breads
router.get("/new",(req,res)=>{
  res.render("new")
})
//show
router.get('/:arrayIndex',(req,res)=>{
    const arrayIndex = req.params.arrayIndex
if(Bread[arrayIndex]){
  res.render('Show',{
    bread:Bread[arrayIndex],
    index:arrayIndex,
    title:"show"
  })
}else{
  res.render('404')
}
//     const breadNum = Bread[arrayIndex]
//     console.log("get request to bread data", Bread[arrayIndex])
//     if(breadNum){
//     res.render("show",
//     {
//      bread:Bread[arrayIndex],
//      title:"show"
//     })
//   }else{
//     res.render("notfound")
//   }
 })
//delete path
router.delete('/:arrayIndex',(req,res)=>{
 Bread.splice(req.params.arrayIndex, 1);
 res.status(303).redirect('/breads')
})

module.exports = router