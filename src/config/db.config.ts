import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
import * as fs from 'fs';

const dbConfig: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'ash1401043m',
  port: 3306,
  database: 'typeorm',
  entities: ['./dist/*.entity.js'],
  synchronize: true,
  migrationsTableName: 'custom_migration_table',
  migrations: ['./dist/migration/*.js'],
  cli: {
    migrationsDir: 'migration',
  },
};

fs.appendFileSync('ormconfig.json', JSON.stringify(dbConfig), {
  flag: 'w',
});

export default dbConfig;
