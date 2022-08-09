const React = require('react')
const Default = require('./layouts/default')

function Index({breads, title}){
    return(
        <Default title ={title}>
            <h2>Index Page</h2>
            <p>I have {breads[0].name} bread!</p>
            <ul>
                {
                    breads.map((bread,index)=>{
                        return(<li key ={index}>
                            <a href={`/breads/${index}`}>
                            {bread.name}
                            </a>
                        </li>)
                    })
                }
            </ul>
            <a href='/breads/new'>create a new bread</a>
        </Default>
    )
}

module.exports = Index