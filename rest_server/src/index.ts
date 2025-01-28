import { Hono } from 'hono'
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/bun-sql';

const db = drizzle(process.env.DATABASE_URL!);


const app = new Hono()


app.get('/', (c) => {
  return c.text('Hello Hono!')
})

// Will match `/api/animal` and `/api/animal/:type`
app.get('/api/animal/:type?', (c) => c.text('Animal!'))

app.get('/posts/:id/comment/:comment_id', async (c) => {
  const { id, comment_id } = c.req.param()
  // Datenbank eintrag erstellen
  return c.text('Wurde erfolgreich hinzugefügt mit ID: ' + id + ' Und dem Kommentar ' + comment_id)
})

app.notFound((c) =>{
  return c.text('Falsch abgebogen!')
})


export default app
