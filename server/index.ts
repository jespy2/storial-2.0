import express, { Request, Response } from 'express'
import cors from 'cors'

import DB from './db'
import bookRouter from './routes/book-router.ts'

const app = express()
const apiPort =8000

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())

DB.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

app.use('/api', bookRouter)

app.listen(apiPort, () => console.log(`🤖 Server running on port ${apiPort} 🚀`))