const messages = []
let id = messages[messages.length -1].id + 1


module.exports = {
    
    readMessage(req, res){
        res.status(200).send(messages)
    }
    
    createMessage(req, res){
        const {text, time} = req.body
        const newMessage = {
            id
            text,
            time,
        }

        res.status(200).send(messages)
    }

    updateMessage(req, res){
        
        
        res.status(200).send(messages)
    }

    deleteMessage(req, res){
        
        
        res.status(200).send(messages)
    }

}