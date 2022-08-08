const React = require('react')
const Def = require("./layouts/default")

function Error404(){
   return(
   <Def>
        <h1>404 error not found</h1>
        <a href='/breads'>go home</a>
    </Def>
   )
}

module.exports = Error404