const Discord = require('discord.js')

module.exports.run = async (client, message, args, config) => {

const { dono } = require("../config.json");
if (!dono.includes(message.author.id)) return message.send("");
message.delete();

    let user = message.mentions.users.first()
    if(!user) return message.reply('Vc nao mencionou ngm')
    let messages = await message.channel.fetchMessages({limit: 100})
    let filtered = messages.filter(obj => obj.author.id === user.id).array()

    if (!filtered.length) return message.reply('Nao achei este usuario')
    for(let i = 0; i < filtered.length; i++) {


      await filtered[i].delete()


    }
    
   // msg.channel.send('apagando' + filtered.length + ' mensagens de' + user.tag + '.')
}


module.exports.help = {
    name:"limpar",
    usage:"*limpar @user",
    desc: "Purge",
    example:"limpar @user",
    guildOnly: true,
    ownerOnly: true,
}