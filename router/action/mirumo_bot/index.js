module.exports = function (req) {
    var response;
    const { date, text, chat, entities, from } = req.body.message;
    if (entities) {
        entities.forEach(element => {
            if (element.type === 'bot_command')
                switch (text.slice(element.offset, element.length)) {
                    case '/TEST': {
                        return response = {
                            method: "sendMessgae",
                            chat_id: chat.id,
                            parse_mode: "MarkdownV2",
                            text: `- Date: ${Date.parse(date)}\n- Text: ${text}\n- From: @${from.username}/ ${from.id}\nServer at https://stormy-everglades-39806.herokuapp.com/bot/:token`
                        };
                    }
                    default: {
                        return response = {
                            method: "sendMessgae",
                            chat_id: char.id,
                            text: `The command(${text.slice(element.offset, element.length)}) is not found`
                        };
                    }
                }
        });
    }
    return response;
}