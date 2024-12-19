const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

app.use((req, res, next) => {
    console.log(`Solicitud recibida: ${req.url}`);
    if (req.url.endsWith('.gz')) {
        res.set('Content-Encoding', 'gzip');
        if (req.url.endsWith('.wasm.gz')) {
            res.set('Content-Type', 'application/wasm');
        } else if (req.url.endsWith('.data.gz')) {
            res.set('Content-Type', 'application/octet-stream');
        } else {
            res.set('Content-Type', 'application/javascript');
        }
    }
    next();
});

app.use(express.static(__dirname));

app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor iniciado en:`);
    console.log(`http://localhost:${port}`);
    console.log(`http://127.0.0.1:${port}`);
    console.log('Presiona Ctrl+C para detener el servidor');
}); 