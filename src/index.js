const texts = require("./texts.js");

const port = 3000;
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const path = require("path");
const io = require("socket.io")(server);

app.set("port", port);
app.use(express.static("public"));

server.listen(port, () => {
    console.log(`Starting server on port ${port}`);
});

io.on("connection", socket => {
    socket.emit("text", texts[Math.floor(Math.random() * texts.length)]);
});
