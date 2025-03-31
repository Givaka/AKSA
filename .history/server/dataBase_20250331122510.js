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

async function getClients() {
  const query = await clientPg.query('SELECT * FROM clients')
  return (query.rows[0]);
}

async function getSchedule() {
  const query = await clientPg.query('SELECT sc.uuid, sc.id, u.fullname, se.title, sc.start_date, sc.end_date, st.title FROM schedule as sc, clients as u, services as se, statuses as st WHERE sc."id-client" = u.uuid AND sc."id-service" = se.id AND sc."id-service" = st.id')
  return (query.rows[0]);
}