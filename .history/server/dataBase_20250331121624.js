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
  const query = await clientPg.query('SELECT * FROM services')
  return (query.rows[0]);
}