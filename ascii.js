const Discord = require('discord.js')
const figlet = require('figlet')

module.exports.run = async(client, message, args) => {
    
const { dono } = require("../config.json");
if (!dono.includes(message.author.id))

    await message.delete()
    
    let reason = args.slice(0).join(' ')
    let ascii3 = (figlet.textSync(reason))
    
    message.channel.send('```\n ' + ascii3 + ' ```')
}