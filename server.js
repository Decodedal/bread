const express = require('express')
require('dotenv').config()
const app = express()

const breadRoutes = require('./controllers/bread_controller')

const PORT = process.env.PORT

app.get('/',(req,res)=>{
    res.send('This is a test')   
})


//routes
app.use('/breads',breadRoutes)



//catch-all
app.get('*',(req,res)=>{
    res.send('404 page does not exist')
})

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})