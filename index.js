const port = 3000;
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const path = require("path");
const io = require("socket.io")(server);

app.set("port", port);
app.use("/static", express.static(__dirname + "/static"));
app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, "index.html"));
});

server.listen(port, () => {
    console.log(`Starting server on port ${port}`);
});