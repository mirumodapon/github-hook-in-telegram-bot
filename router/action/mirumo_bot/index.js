module.exports = function (req) {
    var response;
    const { date, text, chat, entities, from } = req.body.message;
    if (entities) {
        entities.forEach(element => {
            if (element.type === 'bot_command')
                switch (text.slice(element.offset, element.length)) {
                    case '/TEST': {
                        return response = {
                            method: "sendMessage",
                            chat_id: chat.id,
                            text: `- Date: ${(new Date(date * 1000)).toString()}\n- Text: ${text}\n- From: @${from.username}/ ${from.id}\nChat: ${chat.id}\nServer at https://stormy-everglades-39806.herokuapp.com/bot/:token`
                        };
                    }
                    case '/help': {
                        return response = {
                            method: "sendMessage",
                            chat_id: chat.id,
                            text: require('./help')
                        };
                    }
                    default: {
                        return response = {
                            method: "sendMessage",
                            chat_id: chat.id,
                            text: `The command(${text.slice(element.offset, element.length)}) is not found`
                        };
                    }
                }
        });
    }
    return response;
}