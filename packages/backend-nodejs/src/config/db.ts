import * as dotenv from 'dotenv';
// import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { createConnections } from 'typeorm'; 

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

export const connections = createConnections([ 
  {
    name: 'dev',
    type: 'mysql',
    host: process.env.DB_HOST_DEV,
    port: Number(process.env.DB_PORT_DEV),
    username: process.env.DB_USERNAME_DEV,
    password: process.env.DB_PASSWORD_DEV,
    database: process.env.DB_DATABASE_DEV,
    synchronize: true,
    logging: true,
    entities: ['src/api/models/**/*.ts'],
    migrations: ['src/database/migrations/**/*.ts'],
    subscribers: ['src/database/subscriber/**/*.ts'],
    cli: {
      entitiesDir: 'src/api/models',
      migrationsDir: 'src/database/migrations',
      subscribersDir: 'src/database/subscriber',
    },
   //  namingStrategy: new SnakeNamingStrategy(),
  },
  {
    name: 'stage',
    type: 'mysql',
    host: process.env.DB_HOST_STAGE,
    port: Number(process.env.DB_PORT_STAGE),
    username: process.env.DB_USERNAME_STAGE,
    password: process.env.DB_PASSWORD_STAGE,
    database: process.env.DB_DATABASE_STAGE,
    synchronize: false,
    logging: true,
    entities: ['src/api/models/**/*{.ts,.js}'],
    migrations: ['src/database/migrations/**/*{.ts,.js}'],
    subscribers: ['src/database/subscriber/**/*{.ts,.js}'],
    cli: {
      entitiesDir: 'src/api/models',
      migrationsDir: 'src/database/migrations',
      subscribersDir: 'src/database/subscriber',
    },
    // namingStrategy: new SnakeNamingStrategy(),
  },
]); 
