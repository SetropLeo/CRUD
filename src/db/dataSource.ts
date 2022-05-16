import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
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