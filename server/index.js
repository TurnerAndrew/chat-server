const express = require('express')
const app = express()
const controller = require('messages_controller')

app.use(express.json())

const port = 3001

app.listen(port, () => console.log(`${port} is open for business`))