const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Bienvenu sur la page accueil')
    }
    if(req.url === '/about'){
        res.end('Bienvenu sur la page about')
    }
    res.end(`
        <h1>Opps !</h1>
        <p>Il semble que la page que vous demandez n'existe pas <a href='/'>Back home</a> </p>
    `)
})

server.listen(5000)