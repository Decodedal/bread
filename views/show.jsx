const React = require("react")
const Def = require("./layouts/default")

function ShowView({bread, index}){
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
              <form action={`/breads/${index}?_method=DELETE`}
              method ="POST">
               <input type="submit" value='DELETE'/>
              </form>
              
        </Def>
    )
}

module.exports = ShowView