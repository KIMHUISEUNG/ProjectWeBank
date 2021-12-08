import 'dotenv/config'
import './db'
import './public/models/Webtoon'
import './public/models/User'
import app from './app'

const PORT = 5050

const handleListening = () =>
  console.log(`✅ Server listenting on http://localhost:${PORT}`)

app.listen(PORT, handleListening)
