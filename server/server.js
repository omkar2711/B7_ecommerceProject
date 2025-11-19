import express from 'express'
import 'dotenv/config'

const app = express()
const port = process.env.PORT || 3000


// Middleware to parse JSON requests
app.use(express.json())



//Routers

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
