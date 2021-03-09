const Discord = require('discord.js')
const config = require("../config.json")

exports.run = async (client, message, args) => {
    
const { dono } = require("../config.json");
if (!dono.includes(message.author.id)) return message.send("");
    message.delete();
    
    let dcEmbed = new Discord.RichEmbed()
    .setTitle(`Help - ${message.author.tag}`)
    .setColor("#FF4400")
    .setThumbnail(`${message.author.avatarURL}`)
    .addField(`⭕ | ${config.prefix}raid`, '`Comandos para raid de servidores`')
    .addField(`⭕ | ${config.prefix}util`, '`Comandos para usar ao lar livre`')
    .setTimestamp()
    .setFooter(`Made by Team Basic+`, 'https://cdn.discordapp.com/attachments/798719866043498537/807772169576513547/SPOILER_317_Sem_Titulo_20210205141338-1.png')
    
    message.channel.send(dcEmbed)
}
