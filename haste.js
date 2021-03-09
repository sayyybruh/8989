const discord = require('discord.js')
const hastebin = require('hastebin-gen');

exports.run = async (client, message, args) => {
    
const { dono } = require("../config.json");
if (!dono.includes(message.author.id)) return message.send("");

	message.delete()
   let haste = args.slice(0).join(" ")
        hastebin(haste).then(r => {
            message.channel.sendMessage("Aqui está: " + r)});

  }