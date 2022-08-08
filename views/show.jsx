const React = require("react")
const Def = require("./layouts/default")

function ShowView({bread}){
    return(
        <Def title ="Show Details">
              <h2>show details for {bread.name}</h2>
              <a href="/breads">go home</a>
              <img src={bread.image} alt="bread img"></img>
              <p>
                and it 
                {
                    bread.hasGluten
                    ?
                    <span> does have gluten </span>
                    :<span> does not have gluten</span>
                }
              </p>
              
        </Def>
    )
}

module.exports = ShowView