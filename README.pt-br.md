# Integração com Chatbot Telegram
[![pt-br](https://img.shields.io/badge/language-pt--br-green.svg)](https://github.com/cardoso-m/api-telegram-chatbot/main/README.pt-br.md)
[![en](https://img.shields.io/badge/language-en-orange.svg)](https://github.com/cardoso-m/api-telegram-chatbot/main/README.md)
[![Star on GitHub](https://img.shields.io/github/stars/kauemurakami/go-snippets.svg?style=flat&logo=github&colorB=deeppink&label=stars)](https://github.com/cardoso-m/api-telegram-chatbot)

## Passos para Configuração

### 1. Criando o Bot no Telegram

- Abra o Telegram e busque por **BotFather** na barra de pesquisas.
- Envie o comando `/newbot` e siga as instruções para escolher um nome e um username para o seu bot.
- Após a criação, você receberá uma chave de API, como exemplo: `123456789:ABCdefGhiJKLmnopQRstUVwxyz`.

### 2. Obtendo o ID do Bot

- Inicie uma conversa com o seu bot recém-criado.
- Envie o link [userinfobot](https://t.me/userinfobot) para o seu bot e clique nele. Isso abrirá um novo chat que mostrará o ID do bot criado.

### 3. Clonando o Repositório

Execute o seguinte comando no terminal:

```bash
git clone https://github.com/cardoso-m/api-telegram-chatbot
```

### 4. Configurando o Ambiente

- Navegue até a pasta do repositório clonado.
- Vá até arquivo `.env` e adicione as seguintes variáveis, substituindo pelos valores corretos:

```plaintext
## Server Port
PORT = <SUA_PORTA>

##Telegram
API = 123456789:ABCdefGhiJKLmnopQRstUVwxyz
CHAT_ID = <SEU_CHAT_ID>
```

### 5. Instalando Dependências

Execute o comando abaixo para instalar as dependências do projeto:

```bash
npm install
```

### 6. Iniciando o Servidor

Após a instalação das dependências, inicie o servidor executando:

```bash
node app
```

## Usando a API

Após o servidor estar em execução, você pode utilizar ferramentas como Insomnia ou Postman para realizar as requisições.

### 1. Requisições

- **Requisição POST**: `http://localhost:<SUA_PORTA>/sendMessage`
  
- **Requisição GET**: `http://localhost:<SUA_PORTA>/getUpdates`

### 2. Modificando Mensagens

Para personalizar a mensagem que será enviada ao usuário, vá até `src/models/controller` e edite a variável `text` na função `sendMessage`, que está com o valor padrão `Lorem Ipsum`.

### 3. Acessando o Corpo do JSON no getUpdates

Caso você queira ter acesso a todo o corpo do JSON que a API retorna, acesse `src/models/functions/getUpdates` e altere o `return`. Remova o `text` e retorne o `json`.

```javascript
return json; // Exemplo de modificação
```

## Contribuição

Sinta-se à vontade para contribuir com melhorias e correções! Para isso, basta criar uma issue ou enviar um pull request.
