const express = require('express');
const helmet = require('helmet');

// const dogsRouter = require('../api/dogs/')

const server = express();

server.use(express.json());
server.use(helmet());


// dogsRouter here

server.get('/', (req, res) => {
    res.send('API is up and running!')
})

module.exports = server;