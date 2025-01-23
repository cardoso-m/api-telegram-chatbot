const fetch = require('node-fetch')
require('dotenv').config()

const getUpdates = async () => {
    const url = "https://api.telegram.org/bot" + process.env.API + "/getUpdates"

    try {
        const response = await fetch(url)
        const json = await response.json()
        const text = json.result[json.result.length - 1].message.text

        return text

    } catch (err) {
        return err.message
    }
}

module.exports = getUpdates