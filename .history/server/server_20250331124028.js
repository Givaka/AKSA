const schedule = require('node-schedule');
const { v6: uuidv6, } = require('uuid');


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

const jobs = new Map();


app.use(express.static(__dirname));
app.get("/", (_, res) => {
  res.send("Server is running");
});

app.get("/api", (_, res) => {
  res.send("API is running");
});

app.post('/api/schedule', (req, res) => {
  console.log(req.body);

  const scheduleId = uuidv6();

  jobs.set(scheduleId, schedule.scheduleJob(new Date(req.body.date), () => {
    console.log('Запись создана');
  }))

  return res.sendStatus(200);
})


server.listen(3000, () => {
  console.log(`listening on *:${3000}`);
});