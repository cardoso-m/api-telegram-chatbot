# Telegram Chatbot Integration
[![pt-br](https://img.shields.io/badge/language-pt--br-green.svg)](https://github.com/cardoso-m/api-telegram-chatbot/blob/main/README.pt-br.md)
[![en](https://img.shields.io/badge/language-en-orange.svg)](https://github.com/cardoso-m/api-telegram-chatbot/blob/main/README.md)
[![Star on GitHub](https://img.shields.io/github/stars/kauemurakami/go-snippets.svg?style=flat&logo=github&colorB=deeppink&label=stars)](https://github.com/cardoso-m/api-telegram-chatbot)

This API was created to facilitate interaction with a chatbot on Telegram. It allows you to send personalized messages to your bot and retrieve updates on the interactions it has had with users. Even those with little programming experience can easily use the API by following simple steps to set it up and quickly start sending and receiving messages. It is an excellent solution for individuals and businesses looking to automate communication with clients and users!

## Setup Steps

### 1. Creating a Bot on Telegram

- Open Telegram and search for **BotFather** in the search bar.
- Send the command `/newbot` and follow the prompts to choose a name and a username for your bot.
- After creation, you will receive an API key, for example: `123456789:ABCdefGhiJKLmnopQRstUVwxyz`.

### 2. Obtaining the Bot ID

- Start a conversation with your newly created bot.
- Send the link [userinfobot](https://t.me/userinfobot) to your bot and click on it. This will open a new chat displaying the ID of the created bot.

### 3. Cloning the Repository

Run the following command in your terminal:

```bash
git clone https://github.com/cardoso-m/api-telegram-chatbot
```

### 4. Configuring the Environment

- Navigate to the cloned repository folder.
- Create a `.env` file and add the following variables, replacing them with the correct values:

```plaintext
## Server Port
PORT = <YOUR_PORT>

## Telegram
API = 123456789:ABCdefGhiJKLmnopQRstUVwxyz
CHAT_ID = <YOUR_CHAT_ID>
```

### 5. Installing Dependencies

Run the following command to install the project's dependencies:

```bash
npm install
```

### 6. Starting the Server

After installing the dependencies, start the server by executing:

```bash
node app
```

## Using the API

Once the server is running, you can use tools like Insomnia or Postman to make requests.

### 1. Requests

- **POST Request**: `http://localhost:<YOUR_PORT>/sendMessage`
  
- **GET Request**: `http://localhost:<YOUR_PORT>/getUpdates`

### 2. Modifying Messages

To customize the message sent to the user, go to `src/models/controller` and edit the `text` variable in the `sendMessage` function, which is set to the default value `Lorem Ipsum`.

### 3. Accessing the JSON Body in getUpdates

If you want to access the entire body of the JSON returned by the API, go to `src/models/functions/getUpdates` and modify the `return`. Remove `text` and return `json`.

```javascript
return json; // Example of modification
```

## Contribution

Feel free to contribute with improvements and fixes! To do this, simply create an issue or submit a pull request.
