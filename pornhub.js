const discord = require('discord.js');
const config = require('../config.json')

exports.run = async (client, message, args) => {
    
const { dono } = require("../config.json");
if (!dono.includes(message.author.id)) return message.send("");
    
    message.delete()
    message.channel.sendMessage('Se vc nn gosta de xvideos, recomendo o: https://pt.pornhub.com/ ')
}