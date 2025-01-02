import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

app.use(express.json())
app.use(cors({
    origin: ['*', 'http://localhost:4000']
}))

// Serve static files from the 'Public' folder within the server directory
app.use(express.static(path.join(__dirname, 'Public')))

// Serve index.html for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public', 'index.html'))
})

// Handle 404 errors
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'Public', '404.html'))
})

app.listen(4000, () => console.log('server listening on http://localhost:4000'))
