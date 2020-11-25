const express = require('express')
const app = express()
const msgCtrl = require('./controllers/messages_controller')

app.use(express.json())
app.use(express.static('../public/build'))

const port = 3001

app.get('/api/messages', msgCtrl.readMessage)

app.post('/api/messages/', msgCtrl.createMessage)

app.put('/api/messages/:message_id', msgCtrl.updateMessage)

app.delete('/api/messages/:message_id', msgCtrl.deleteMessage)

app.listen(port, () => console.log(`${port} is open for business`))