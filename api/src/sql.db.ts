import { createConnection } from 'typeorm'
import { Quote } from './models/quote'

const sql = async () =>
  await createConnection({
    type: 'sqlite',
    database: ':memory:',
    logging: true,
    synchronize: process.env.NODE_ENV !== 'production',
    migrations: ['migration/*.js'],
    entities: [Quote],
  })

export default sql
