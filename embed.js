const Discord = require('discord.js')
const config = require('../config.json')

exports.run = async (client, message, args) => {
    
const { dono } = require("../config.json");
if (!dono.includes(message.author.id)) return message.send("");
    message.delete();
    
    let embedpalavra = args.slice(0).join(" ")
    
    let embedDc = new Discord.RichEmbed()
    .setColor("#FF4400")
    .setDescription(`${embedpalavra}`)
    
    message.channel.send(embedDc)
}