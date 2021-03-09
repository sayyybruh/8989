const Discord = require('discord.js')
const config = require("../config.json")

exports.run = async (client, message, args) => {
    
const { dono } = require("../config.json");
if (!dono.includes(message.author.id)) return message.send("");
    message.delete();
    
    let dcEmbed = new Discord.RichEmbed()
    .setTitle(`<:reddevloper_:798742302784618527> | Help Raid - ${message.author.tag}`)
    .setColor("#FF4400")
    .setThumbnail(`${message.author.avatarURL}`)
    .addField(`⭕ | ${config.prefix}delall`, '`Irá excluir todos os canais!`')
    .addField(`⭕ | ${config.prefix}spam`, '`Ira spamar a mensagem requisitada (obs: ele tera um delay para a conta nn cair)`')
    .addField(`⭕ | ${config.prefix}clear`, '`Limpara a mensagem`')
    .addField(`⭕ | ${config.prefix}bye`, '`Começara a banir todos os membros!`')
    .addField(`⭕ | ${config.prefix}createtext`, '`Começara a criar 100 canais com o nome requisitado`')
    .addField(`⭕ | ${config.prefix}kickall`, '`Começara a expulsar todos os membros!`')
    .addField(`⭕ | ${config.prefix}banall`, '`Começara a banir todos os membros possiveis!`')
    .addField(`⭕ | ${config.prefix}apelidoall [apelido q deseja]`, '`Começara a trocar o apelido requisitado de todos os membros do servidor!`')
    .setTimestamp()
    .setFooter(`Made by Team Basic+`, 'https://cdn.discordapp.com/attachments/798719866043498537/807772169576513547/SPOILER_317_Sem_Titulo_20210205141338-1.png')
    
    message.channel.send(dcEmbed)
}
