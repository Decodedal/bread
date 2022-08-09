const express = require('express')
require('dotenv').config()
const app = express()


// MIDDLEWARE
app.use(express.static("public"))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
// this is how you read that data
app.use(express.urlencoded({extended: true}))



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