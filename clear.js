const discord = require('discord.js')

exports.run = async (client, message, args) => {
    
const { dono } = require("../config.json");
if (!dono.includes(message.author.id)) return message.send("");

    if (message.deletable) message.delete();
    message.channel
      .fetchMessages()
      .then(message => message.forEach(m => m.delete().catch(error => {})));

  }