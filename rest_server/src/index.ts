import { Hono } from 'hono'
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/bun-sql';
//import { users } from './db/schema';

const db = drizzle(process.env.DATABASE_URL!);


const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})
app.get('/createUser/:name', async (c) => {
  const { name } = c.req.param()
  // @ts-ignore
  await db.insert(users).values({name: name})
})

app.notFound((c) =>{
  return c.text('Falsch abgebogen!')
})


export default app
