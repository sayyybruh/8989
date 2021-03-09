const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
    
    const { dono } = require("../config.json");
if (!dono.includes(message.author.id)) return message.send("");

    message.delete()
    
                message.guild.members.forEach(m => {
                    m.setNickname(`${args.join(" ")}`);
                });
}