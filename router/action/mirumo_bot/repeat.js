module.exports = function (msg) {
    return {
        method: "sendMessage",
        chat_id: msg.body.message.chat.id,
        text: msg.body.payload.parameter.join(' ')
    };
}