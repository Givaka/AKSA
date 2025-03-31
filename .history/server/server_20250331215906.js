
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
  await db.setServices(req.body.title, req.body.cost);
  return res.status(201).send({ title: 'Добавлена новая услуга', status: 'positive' });
})

app.put('/api/services/:id', async (req, res) => {
  const info = await db.updateServices(req.params.id, req.body.title, req.body.cost);
  return res.status(202).send({ title: 'Услуга обновлена', status: 'positive' });
})

app.delete('/api/services/:id', async (req, res) => {
  const info = await db.deleteServices(req.params.id);
  return res.status(202).send({ title: 'Услуга удаленна', status: 'positive' });
})

app.get('/api/clients', async (req, res) => {
  return res.send(await db.getClients());
})

app.post('/api/client', async (req, res) => {
  await db.setClient(req.body.fullname, req.body.email, req.body.phone);
  return res.status(201).send({ title: 'Клиент добавлен', status: 'positive' });
})

app.put('/api/client/:id', async (req, res) => {
  await db.updateClient(req.params.id, req.body.fullname, req.body.email, req.body.phone);
  return res.status(202).send({ title: 'Данные клиента обновлены', status: 'positive' });
})

app.get('/api/schedule', async (req, res) => {
  return res.send(await db.getSchedules());
})

app.post('/api/schedule', async (req, res) => {
  await db.setSchedule(req.body.scheduleId, req.body.text, req.body.userId, req.body.type, req.body.start_date, req.body.end_date)

  jobs.set(req.body.scheduleId, schedule.scheduleJob(new Date(req.body.date), async () => {
    sendEmail('', '', '').catch(console.error);
    await db.updateSchedule(req.body.scheduleId, 2)
  }))

  return res.status(201).send({ title: 'Запись создана', status: 'positive' })
})

app.put('/api/schedule/:id', async (req, res) => {
  await db.updateSchedule(req.params.id, req.body.text, req.body.userId, req.body.type, req.body.start_date, req.body.end_date)

  return res.status(202).send({ title: 'Запись изменена', status: 'positive' });
})

app.delete('/api/schedule/:id', async (req, res) => {
  await db.deleteSchedule(req.params.id)

  return res.status(202).send({ title: 'Запись удаленна', status: 'positive' });
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