let messages = []
let id = 0


module.exports = {
    
    readMessage(req, res){
        res.status(200).send(messages)
    },
    
    createMessage(req, res){
        const {text, time} = req.body
        const newMessage = {
            id,
            text,
            time,
        }
        messages.push(newMessage)

        id++

        res.status(200).send(messages)
    },

    updateMessage(req, res){
        const {message_id} = req.params
        const {text, time} = req.body
        const index = messages.findIndex(element => element.id === +message_id)

        if(index === -1){
            return res.status(404).send('<img src = "https://media.giphy.com/media/VIQfHC9jAZbt6ojTdo/giphy.gif"/>')
        }
        
        const currentMessage = messages[index]

        messages[index] = {
                id: currentMessage.id,
                text: text || currentMessage.text,
                time: time || currentMessage.time,
        }

        res.status(200).send(messages)
    },

    deleteMessage(req, res){
        const {message_id} = req.params

        const index = messages.findIndex(element => element.id === +message_id)
        
        if(index !== -1){
            messages.splice(index, 1)
            res.status(200).send(messages)
        } else {
            return res.status(404).send('<img src = "https://media.giphy.com/media/VIQfHC9jAZbt6ojTdo/giphy.gif"/>')
        }
        


    }
}
