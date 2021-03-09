const Discord = require('discord.js')
const config = require("../config.json");

exports.run = async (client, message, args) => {

const { dono } = require("../config.json");
if (!dono.includes(message.author.id)) return message.send("");
message.delete();



    message.delete()
    var charge = ".";
    var chargeC = "█";
    message.channel.send("`[" + charge.repeat(50) + "]`").then(message => {
      for (i = 0; i <= 50; i++) {

        //let loadEmbed = new Discord.RichEmbed()
        //.setColor("RANDOM")
       // .setDescription(
       //     "`[" +
      //      chargeC.repeat(i) +
      //      charge.repeat(50 - i) +
       //     "]`\nReiniciadokk..ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ" +
      //      (i * 100) / 50 +
       //     "% "
        //)
        //.setFooter(`#Kyast`)
        message.edit("`[" + chargeC.repeat(i) + charge.repeat(50 - i) + "]`\nReiniciando.. " + (i * 100) / 50 + "% ")
.catch(error => {});
         
      }
      message.edit("`Acabou...`").catch(error => {});
    })
}






