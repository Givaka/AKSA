const cron = require('node-cron');
const express = require("express"),
  app = express(),
  http = require("http"),
  server = http.createServer(app);

const task = cron.schedule('1 * * * * *', () => {
  console.log('TEST');

  task.stop();
})


app.use(express.static(__dirname));
  app.get("/", (_, res) => {
    res.send("Server is running");
  });
  app.get("/api", (_, res) => {
    res.send("API is running");
  });
  server.listen(3000, () => {
    console.log(`listening on *:${3000}`);
  });