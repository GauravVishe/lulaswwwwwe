const { MessageEmbed } = require(`discord.js`);
const config = require(`../../botconfig/config.json`);
const ee = require(`../../botconfig/embed.json`);
const DBL = require('@top-gg/sdk');
const emoji = require(`../../botconfig/emojis.json`);



module.exports = {
    name: `24/7`,
    aliases: [`247`, `autojoin`],
    premium: false,
    perms: [ `SEND_MESSAGES` ],
    botperms: [ `SEND_MESSAGES`, `EMBED_LINK` ],
    category: `Settings`,
    description: `Enable 24/7 mode in your server`,
    usage: `24/7`,
    premium: true,
    memberpermissions: [`ADMINISTRATOR`],
    run: async (client, message, args, guildData, player, prefix) => {


      
        
        const memchannel = message.member.voice.channel;
            if(!memchannel) {
                const eme = new MessageEmbed()
                .setColor(ee.wrongcolor)
                .setDescription(`${emoji.msg.ERROR} You are not in voice channel`)
                return message.channel.send({embeds: [eme]})
            }

            guildData.ajenabled = !guildData.ajenabled
            guildData.textChannel = guildData.ajenabled ? null : message.channel.id;
            guildData.voiceChannel = guildData.ajenabled ? null : memchannel.id;
            guildData.save()
             
            const suc = new MessageEmbed()
            .setAuthor(`${message.author.tag} - 24/7`, message.author.displayAvatarURL())
            .setDescription(`${guildData.ajenabled ? emoji.msg.SUCCESS : emoji.msg.ERROR} | 24/7 Mode is now **${guildData.ajenabled ? `Enabled` : `Disabled`}** Successfully`)
            .setColor(ee.color)
          
            message.channel.send({embeds: [suc]})
      
  
   
          
           
   
            
        
    }
};