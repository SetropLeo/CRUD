import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: '127.0.0.1',
  port: 55432,
  username: 'admin',
  password: '123',
  database: 'code_drops_crud',
  migrations: ['../migrations/*.ts'],
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source Initialized');
  })
  .catch((err) => {
    console.log('Data Source Initialization Error', err);
  });

  export default AppDataSource;