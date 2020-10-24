import { createConnection } from 'typeorm';

createConnection().then(() => console.log('Succesfuly connected with database'));