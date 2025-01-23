const fetch = require('node-fetch')
require('dotenv').config()

const sendMessage = async (answer) => {

    let url = "https://api.telegram.org/bot" + process.env.API + "/sendMessage"

    try {
        let  response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: process.env.CHAT_ID,
                text: answer,
            })
        })

        let data = await response.json()
        return data

    } catch (err) {
        return err.message
    }
}

module.exports = sendMessage