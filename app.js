const express = require('express')
const app = express()

// env
require('dotenv').config()
const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.send('Home')
})

app.listen(PORT, () => {
    console.log(`Server RUN - Port: ${PORT}`)
})