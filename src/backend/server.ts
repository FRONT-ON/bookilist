// Express - веб-фреймворк для приложений Node.js
import express from 'express'
// cors - библиотека для обеспечения запросов к ресурсам другого домена
import cors from 'cors'
// dotenv - пакет, выполняющий загрузку переменных окружения из .env файла в process.env
import dotenv from 'dotenv'
import { router } from './routes/routes'

// defining the server port
const port = 8080

dotenv.config()
const app = express()
app.use(cors())

// listening for port 5000
app.listen(8080, ()=> console.log(`Server is running on ${port}` ))

// API request
app.use('/api', router)