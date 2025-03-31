const db = require("./dataBase");
const mailConf = JSON.parse(fs.readFileSync('./mailConf.json', 'utf-8'))
const transporter = nodemailer.createTransport(mailConf);

const schedule = require('node-schedule');
const { v6: uuidv6, } = require('uuid');
const nodemailer = require('nodemailer');

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

app.get('/api/statuses', async (req, res) => {
  return res.send(await db.getStatuses());
})

app.get('/api/services', async (req, res) => {
  return res.send(await db.getServices());
})

app.post('/api/services', (req, res) => {

})

app.delete('/api/services', (req, res) => {

})

app.get('/api/client', async (req, res) => {
  return res.send(await db.getClients());
})

app.post('/api/client', (req, res) => {

})

app.put('/api/client', (req, res) => {

})



app.get('/api/schedule', async (req, res) => {
  return res.send(await db.getSchedules());
})

app.post('/api/schedule', (req, res) => {
  console.log(req.body);

  const scheduleId = uuidv6();

  jobs.set(scheduleId, schedule.scheduleJob(new Date(req.body.date), () => {
  }))

  return res.status(200).send('Запись создана');
})

app.put('/api/schedule', (req, res) => {

})


server.listen(3000, () => {
  console.log(`listening on *:${3000}`);
});

async function sendEmail() {
  let mailOptions = {
    from: 'your-email@gmail.com',
    to: 'recipient-email@gmail.com',
    subject: 'Hello, World!',
    text: 'This is a plain text email'
  };

  let info = await transporter.sendMail(mailOptions);
  console.log('Message sent: %s', info.messageId);
}