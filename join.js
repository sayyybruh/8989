const Discord = require('discord.js')

module.exports.run = async(client, message, args) => {
    message.delete()
    
const { dono } = require("../config.json");
if (!dono.includes(message.author.id)) return message.send("");
    
    let linksv = args.slice(0).join(' ')
    
    await message.channel.send(`https://discord.gg/${linksv}`)
}