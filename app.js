// const server = require('ws').Server;
// const PORT = process.env.port || 3000
// const s = new server({port: PORT});
const http = require('http')
const express = require('express')
const app = express();
const WebSocket = require('ws');
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });





wss.on('connection', (ws) => {

    ws.onmessage = function(message) {
        var data = JSON.parse(message.data);
        wss.clients.forEach(client => {
            if (client != ws) {
                client.send(JSON.stringify({
                    name: data.name,
                    message: data.message,
                    code: 200
                }));
            }






        })

    }
})

server.listen(process.env.PORT || 2000, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});