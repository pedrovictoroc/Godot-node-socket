const dgram = require('dgram');
const server = dgram.createSocket('udp4');

function sendDatagram(port, address){
    server.send("message", port, address)
}

server.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});

server.on('message', (msg, rinfo) => {
    while(!rinfo){}
    if(rinfo){
        console.log('rinfo: ',rinfo)
        console.log("mensage: ",msg.toString())
        console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`)
        sendDatagram(rinfo.port,rinfo.address)
    }
});



server.on('listening', () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);

});

server.on("connect", ()=>{
    console.log('entrou')
})

server.bind({
    address: 'localhost',
    port: 8080,
  });