const http = require('node:http');
const os=require('node:os');

const bytestogb = (bytes) => ( bytes / 1024/ 1024 /1024).toFixed(2);

const infrmaciondelsistema= {
    nombredelsistema: os.type(),
    versiondelsistema: os.version(),
    arquitectura: os.arch(),
    procesadores: os.cpus().length,
    memoriaTotalGB: bytestogb(os.totalmem()),
    memoriaLibreGB: bytestogb (os.freemem()),
    tiempoActivoHoras: `${(os.uptime() / 3600).toFixed(2)} horas`,
    nombrehost: os.hostname(),
    modelodelprocesador: os.cpus()[0].model,
}

console.info('Información del sistema:', infrmaciondelsistema);



const port=3000;



const generalHTML = ()=> {
return `
<html>
   <head> <title> My Server </title> </head>
    <body> 
    <h1>Welcome to My Server ${informaciondelsistema.arquitectura} </h1>
     <table>
          <tr><th>Nombre del sistema</th><td>${informaciondelsistema.nombredelsistema}</td></tr>
          <tr><th>Versión</th><td>${informaciondelsistema.versiondelsistema}</td></tr>
          <tr><th>Arquitectura</th><td>${informaciondelsistema.arquitectura}</td></tr>
          <tr><th>Procesadores</th><td>${informaciondelsistema.procesadores}</td></tr>
          <tr><th>Modelo del procesador</th><td>${informaciondelsistema.modelodelprocesador}</td></tr>
          <tr><th>Memoria total</th><td>${informaciondelsistema.memoriaTotalGB} GB</td></tr>
          <tr><th>Memoria libre</th><td>${informaciondelsistema.memoriaLibreGB} GB</td></tr>
          <tr><th>Tiempo activo</th><td>${informaciondelsistema.tiempoActivoHoras}</td></tr>
          <tr><th>Nombre del host</th><td>${informaciondelsistema.nombrehost}</td></tr>
        </table>


    <p>this is a general page accessible to all users
    </p>
    </body>
</html>

`
}

const server = http.createServer((req, res) => { 
    res.writeHead(200, { 'Content-Type': 'text/html ; charset=UTF-8' });
    const html= generalHTML();
    res.end(html);
})

server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})