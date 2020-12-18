// server.js
const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 4000 })

let temperatura = 0

wss.on('connection', ws => {
    console.log('Nova conexão')

    ws.on('message', message => {
        temperatura = message
    })

    setInterval(function () { temperatura+=1; ws.send(temperatura); }, 1000);

})
