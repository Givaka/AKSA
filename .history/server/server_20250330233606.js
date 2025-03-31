const cron = require('node-schedule');
const express = require("express"),
  app = express(),
  http = require("http"),
  server = http.createServer(app);

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(express.json({ limit: "500kb" }));


app.use(express.static(__dirname));
app.get("/", (_, res) => {
  res.send("Server is running");
});

app.get("/api", (_, res) => {
  res.send("API is running");
});

app.post('/api/schedule', (req, res) => {
  console.log(req.body);
})


server.listen(3000, () => {
  console.log(`listening on *:${3000}`);
});