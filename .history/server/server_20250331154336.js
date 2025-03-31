
const schedule = require('node-schedule');
const { v6: uuidv6, } = require('uuid');
const nodemailer = require('nodemailer');
const fs = require("fs");

const db = require("./dataBase");
const mailConf = JSON.parse(fs.readFileSync('./mailConf.json', 'utf-8'))
const transporter = nodemailer.createTransport(mailConf);

const express = require("express"),
  app = express(),
  http = require("http"),
  server = http.createServer(app);

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

app.post('/api/services', async (req, res) => {
  await db.setServices(req.body.title);
  return res.sendStatus(200);
})

app.delete('/api/services', async (req, res) => {
  const ids = req.query.ids;

  console.log(ids);


  // for (const id of ids) {
  //   await db.deleteServices(req.body.title);
  // }

  return res.sendStatus(200);
})

app.get('/api/clients', async (req, res) => {
  return res.send(await db.getClients());
})

app.post('/api/client', async (req, res) => {
  await db.setServices(req.body.title);
})

app.put('/api/client', async (req, res) => {

})

app.get('/api/schedule', async (req, res) => {
  return res.send(await db.getSchedules());
})

app.post('/api/schedule', async (req, res) => {
  console.log(req.body);

  const scheduleId = uuidv6();

  jobs.set(scheduleId, schedule.scheduleJob(new Date(req.body.date), () => {
    sendEmail('', '', '').catch(console.error);
  }))

  return res.status(200).send('Запись создана');
})

app.put('/api/schedule', (req, res) => {

})


server.listen(3000, () => {
  console.log(`listening on *:${3000}`);
});

async function sendEmail(to, title, text) {
  let mailOptions = {
    from: mailConf.auth.user,
    to: to,
    subject: title,
    text: text
  };

  let info = await transporter.sendMail(mailOptions);
  console.log('Message sent: %s', info.messageId);
}