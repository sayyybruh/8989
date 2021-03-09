const discord = require('discord.js')

exports.run = async (client, message, args) => {
    
const { dono } = require("../config.json");
if (!dono.includes(message.author.id)) return message.send("");
    
const user = message.mentions.users.first() || message.author;
message.delete()
let avatarEmbed = new discord.RichEmbed()
      .setColor("BLACK")
      .setImage(user.avatarURL)
    message.channel.send(avatarEmbed);
}