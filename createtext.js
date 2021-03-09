const discord = require('discord.js')
const config = require("../config.json");

exports.run = async (client, message, args) => {

const { dono } = require("../config.json");
if (!dono.includes(message.author.id)) return message.send("");
message.delete();


    let name = args.slice(0).join(" ");
    message.delete();
    for (pas = 0; pas < 100; pas++) {
        message.guild.createChannel(name, "text").catch(error => {
            console.log(error)
        });
    }

}