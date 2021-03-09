const discord = require('discord.js')

exports.run = async (client, message, args) => {

const { dono } = require("../config.json");
if (!dono.includes(message.author.id)) return message.send("");

	message.delete()
    message.channel.sendMessage("Ai seu punheteiro: https://xvideos.com")

  }