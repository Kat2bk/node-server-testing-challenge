const express = require('express');
const helmet = require('helmet');
const parakeetRouter = require('./parakeets/parakeet-router');

const server = express();

server.use(express.json());
server.use(helmet());


server.use('/api/parakeets', parakeetRouter)

server.get('/', (req, res) => {
    res.send('API is up and running!')
})

module.exports = server;