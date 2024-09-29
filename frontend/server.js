const express = require('express');
const path = require('path');
const cors = require('cors');

const whitelist = ['http://localhost:9000', 'http://host.docker.internal:9000', 'http://www.api.meringedev.site', 'http://api.meringedev.site', 'https://www.api.meringedev.site', 'https://api.meringedev.site'];

const allowed_headers = ['Content-Type', 'Accept', 'Authorization', 'ngrok-skip-browser-warning', 'Set-Cookie'];

const cors_options = {
    origin: whitelist,
    optionsSuccessStatus: 200,
    allowedHeaders: allowed_headers,
    credentials: true
};

const global_cors = cors(cors_options);

const app = express();

app.use(global_cors);
app.use(express.json());

// app.use('/public', express.static('esbuild_js'));
// app.use('/public', express.static('css'));
// app.use('/public', express.static('assets'));

app.use('/public', express.static(path.join(__dirname, 'esbuild_js')));
app.use('/public', express.static(path.join(__dirname, 'css')))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/main.html');
})

app.listen(9010, () => {
    console.log('Listening on port ' + 9010);
})