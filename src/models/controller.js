const checkMessage = require('./functions/getUpdates')
const sendMsg = require('./functions/sendMessage')

const getUpdates = async (req, res) => {
    checkMessage().then((response) => {
        res.status(200).send(response)
    }).catch((error) => {
        res.status(400).send(error.message)
    })
}

const sendMessage = async (req, res) => {
    let text = 'Lorem Ipsum'

    sendMsg(text).then((response) => {
        res.status(200).send(response)
    }).catch((error) => {
        res.status(400).send(error.message)
    })
}

module.exports = {
    getUpdates,
    sendMessage
}