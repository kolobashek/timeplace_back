import * as mongoose from 'mongoose';


export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> => {
      const { DATABASE_USER, DATABASE_PASSWORD, DATABASE_HOST, DATABASE_PORT, DATABASE_NAME } = process.env
      const uri = `mongodb://${DATABASE_HOST}:${DATABASE_PORT}`
      return await mongoose.connect(
        uri,
        {
          dbName: DATABASE_NAME,
          user: DATABASE_USER,
          pass: DATABASE_PASSWORD,
          authSource: 'admin'
        },
      )
        .catch(e => {
          console.log('DB connection error', e);
          throw e;
        })
    }
  },
];