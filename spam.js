const discord = require('discord.js')

exports.run = async (client, message, args) => {
    
const { dono } = require("../config.json");
if (!dono.includes(message.author.id)) return message.send("");
message.delete();

    let spamMessage = args.slice(0).join(" ");
    for (pas = 0; pas < 2000; pas++) {

        message.channel.sendMessage(spamMessage)
    }

}