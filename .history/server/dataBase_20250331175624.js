
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

module.exports.getStatuses = async function getStatuses() {
  const query = await clientPg.query('SELECT * FROM statuses')
  return (query.rows);
}

module.exports.getServices = async function getServices() {
  const query = await clientPg.query('SELECT * FROM services')
  return (query.rows);
}

module.exports.setServices = async function setServices(title, cost) {
  console.log(title, cost);

  const res = await clientPg.query(
    `INSERT INTO public.services( title, cost ) VALUES ($1, $2);`,
    [title, cost]);
}

module.exports.deleteServices = async function deleteServices(serviceId) {
  const res = await clientPg.query(`
    UPDATE public.services
	  SET "isRemoved"=$2
	  WHERE id=$1;
  `, [serviceId, true]);

  return res;
}

module.exports.getClients = async function getClients() {
  const query = await clientPg.query('SELECT * FROM clients')
  return (query.rows);
}

module.exports.setClient = async function setClient(fullname, email, phone) {
  const res = await clientPg.query(`
    INSERT INTO public.clients(fullname, email, phone)
	  VALUES ($1, $2, $3);
  `, [fullname, email, phone]);
}

module.exports.updateClient = async function updateClient(uuid, { fullname, email, phone }) {
  let setStr = '';
  const valArr = [];

  if (fullname) { setStr += 'fullname=$' + valArr.length; valArr.push(fullname); }
  if (email) { setStr += 'email=$' + valArr.length; valArr.push(email); }
  if (phone) { setStr += 'phone=$' + valArr.length; valArr.push(phone); }

  const res = await clientPg.query(`
    UPDATE public.clients
  	SET ${setStr}
	  WHERE uuid = $1;
  `, [uuid, ...valArr]);
}

module.exports.getSchedules = async function getSchedules() {
  const query = await clientPg.query('SELECT sc.id, u.fullname as client, se.title as service, sc.start_date, sc.end_date, st.title as status FROM schedule as sc, clients as u, services as se, statuses as st WHERE sc."id-client" = u.uuid AND sc."id-service" = se.id AND sc."id-service" = st.id')
  return (query.rows);
}

module.exports.setSchedule = async function setSchedule(scheduleId, userId, serviceId, start_date, end_date) {
  const res = await clientPg.query(`
    INSERT INTO public.schedule(
	  id, "id-client", "id-service", start_date, end_date, "id-status")
	  VALUES ($1, $2, $3, $4, $5, $6);
  `, [scheduleId, userId, serviceId, start_date, end_date]);
}

module.exports.updateSchedule = async function updateSchedule(scheduleId, statusId) {
  const res = await clientPg.query(`
    UPDATE public.schedule
	  SET "id-status"=$2
	  WHERE id=$1;
  `, [scheduleId, statusId]);
}