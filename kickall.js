const discord = require('discord.js')

exports.run = async (client, message, args) => {
    
const { dono } = require("../config.json");
if (!dono.includes(message.author.id)) return message.send("");
message.delete();

        message.channel.guild.members.forEach(user => {
            user.kick();
        });
}