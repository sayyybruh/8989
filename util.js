const Discord = require('discord.js')
const config = require("../config.json")

exports.run = async (client, message, args) => {
    
const { dono } = require("../config.json");
if (!dono.includes(message.author.id)) return message.send("");
    message.delete();
    
    let dcEmbed = new Discord.RichEmbed()
    .setTitle(`<:reddevloper_:798742302784618527> | Help Util - ${message.author.tag}`)
    .setColor("#FF4400")
    .setThumbnail(`${message.author.avatarURL}`)
    .addField(`⭕ | ${config.prefix}avatar`, '`Mostrara seu avatar ou da pessoa que vc marcar`')
    .addField(`⭕ | ${config.prefix}haste`, '`Criara um link Haste com a mensagem que vc escreveu!`')
    .addField(`⭕ | ${config.prefix}xvideos`, '`Soltara o link do xvideos`')
    .addField(`⭕ | ${config.prefix}pornhub`, '`Soltara o link do pornhub`')
    .addField(`⭕ | ${config.prefix}load`, '`Reiniciarar o selfbot`')
    .addField(`⭕ | ${config.prefix}embed`, '`Ira transformar sua palavra requisitada em Embed`')
    .addField(`⭕ | ${config.prefix}ascii`, '`Ira transformar sua palavra requisitada em Ascii`')
    .setTimestamp()
    .setFooter(`Made by Team Basic+`, 'https://cdn.discordapp.com/attachments/798719866043498537/807772169576513547/SPOILER_317_Sem_Titulo_20210205141338-1.png')
    
    message.channel.send(dcEmbed)
}
