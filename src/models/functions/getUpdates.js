const fetch = require('node-fetch')
require('dotenv').config()

const getUpdates = async () => {
    let url = "https://api.telegram.org/bot" + process.env.API + "/getUpdates"

    try {
        let response = await fetch(url)

        //Here we collect the complete json regarding the request response
        let json = await response.json()

        //Here we only collect the message sent by the user
        let text = json.result[json.result.length - 1].message.text

        return text

    } catch (err) {
        return err.message
    }
}

module.exports = getUpdates