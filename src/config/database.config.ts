import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT || 27017,
  name: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  initialUser: {
    firstName: 'Nilesh',
    lastName: 'Kalsariya',
    gender: 'Male',
    email: 'nilesh.kalsariya@agileinfoways.com',
    password: '123456',
  },
  mongo: {
    connectionString:
      //   'mongodb://' +
      //   process.env.DATABASE_USER +
      //   ':' +
      //   process.env.DATABASE_PASS +
      //   '@' +
      //   process.env.DATABASE_HOST +
      //   ':' +
      //   process.env.DATABASE_PORT +
      //   '/' +
      //   process.env.DATABASE_NAME +
      //   '?authSource=admin',
      'mongodb://' +
      process.env.DATABASE_HOST +
      '/' +
      process.env.DATABASE_NAME +
      '?authSource=admin',
  },
  postgres: {
    type: 'postgres',
    enableSSL: process.env.ENABLE_SQL_SSL ? process.env.ENABLE_SQL_SSL : false,
  },
}));
