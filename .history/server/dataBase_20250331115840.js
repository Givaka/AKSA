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