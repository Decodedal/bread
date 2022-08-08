const React = require('react')

function Default(html){
    return(
        <html>
            <head>
                <title>{html.title || 'Default'}</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"/>
                <link rel='stylesheet' href='/main.css'></link>
            </head>
            <body>
                <h1>HTML Rendered!</h1>
                <div className ="container">
                {html.children}
                </div>
            </body>
        </html>
    )
}

module.exports = Default