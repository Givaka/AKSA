
const pg = require('pg'),
  Client = pg.Client;

const connectionParam = {
  user: 'postgres',
  password: '159753',
  host: 'localhost',
  port: 5432,
  database: 'scheduler',
}

const clientPg = new Client(connectionParam);
clientPg.connect();

async function getStatuses() {
  const query = await clientPg.query('SELECT * FROM statuses')
  return (query.rows[0]);
}

async function getServices() {
  const query = await clientPg.query('SELECT * FROM services')
  return (query.rows[0]);
}

async function setServices(title) {
  const res = await clientPg.query(
    `INSERT INTO public.services( title ) VALUES (?);`,
    [title]);
}

async function deleteServices(serviceId) {
  const res = await clientPg.query(`
    UPDATE public.services
	  SET "isRemoved"=true
	  WHERE id=$1;
  `, [serviceId]);
}

async function getClients() {
  const query = await clientPg.query('SELECT * FROM clients')
  return (query.rows[0]);
}

async function setClient(fullname, email, phone = null) {
  const res = await clientPg.query(`
    INSERT INTO public.clients(fullname, email, phone)
	  VALUES (?, ?, ?);
  `, [fullname, email, phone]);
}

async function getSchedules() {
  const query = await clientPg.query('SELECT sc.id, u.fullname as client, se.title as service, sc.start_date, sc.end_date, st.title as status FROM schedule as sc, clients as u, services as se, statuses as st WHERE sc."id-client" = u.uuid AND sc."id-service" = se.id AND sc."id-service" = st.id')
  return (query.rows[0]);
}

async function setSchedule(scheduleId, userId, serviceId, start_date, end_date) {
  const res = await clientPg.query(`
    INSERT INTO public.schedule(
	  id, "id-client", "id-service", start_date, end_date, "id-status")
	  VALUES ($1, $2, $3, $4, $5, $6);
  `, [scheduleId, userId, serviceId, start_date, end_date]);
}

async function updateSchedule(scheduleId, statusId) {
  const res = await clientPg.query(`
    UPDATE public.schedule
	  SET "id-status"=$2
	  WHERE id=$1;
  `, [scheduleId, statusId]);
}