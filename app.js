const express = require('express')
const app = express()
const routes = require('./src/routes/routes')

// env
require('dotenv').config()
const PORT = process.env.PORT

app.use(routes)

app.get('/', (req, res) => {
    res.send('Home')
})

app.listen(PORT, () => {
    console.log(`Server RUN - Port: ${PORT}`)
})