const express = require('express');
const server = express();

const actionsRouter = require('./actions/actions-router');

server.use(actionsRouter);

// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

module.exports = server;
