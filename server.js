const express = require("express");

const hubsRouter = require("./hubs/hubs-router");
const messageRouter = require("./messages/message-router");

const server = express()

server.use(express.json());

server.use("/", hubsRouter);

server.get("/", (req,res) => {
    res.send(`
    <h2>Node-api2-project</h2>`)
});

module.exports = server;


