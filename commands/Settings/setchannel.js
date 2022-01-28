const {
    MessageEmbed
  } = require(`discord.js`);
  const config = require(`../../botconfig/config.json`);
  const DBL = require('@top-gg/sdk');
  const ee = require(`../../botconfig/embed.json`);
  const emoji = require(`../../botconfig/emojis.json`);
  
  
  module.exports = {
    name: `addbotchat`,
    aliases: [`addbotchannel`],
    category: `Settings`,
    description: `Let's you enable a bot only chat where the community is allowed to use commands`,
    usage: `addbotchat <#chat>`,
    memberpermissions: [`ADMINISTRATOR`],
    run: async (client, message, args, guildData, player, prefix) => {
      try {
        //get the channel from the Ping
        let channel = message.mentions.channels.first();
        //if no channel pinged return error
        if (!channel) {
          const op = new MessageEmbed()
          .setColor(ee.wrongcolor)
          .setDescription(`${emoji.msg.ERROR} Please Select A Method \n1. \`!setchannel #channel\`\n2. \`!setchannel reset\``)
          return message.channel.send({embeds: [op]})
        }
        //try to find it, just incase user pings channel from different server
        try {
          message.guild.channels.cache.get(channel.id)
        } catch {
          const opop = new MessageEmbed()
          .setColor(ee.wrongcolor)
          .setDescription(`${emoji.msg.ERROR} It seems that the Channel does not exist in this Server!`)
          return message.channel.send({embeds: [opop]});
        }
        //if its already in the database return error
        if (guildData.botChannels.includes(channel.id)) {
          const nop = new MessageEmbed()
          .setColor(ee.wrongcolor)
          .setDescription(`${emoji.msg.ERROR} This Channel is alerady in the List!`)
          return message.channel.send({embeds: [nop]});
        }
        if(guildData.botChannels.length > 5) {
          const ppp = new MessageEmbed()
          .setColor(ee.wrongcolor)
          .setDescription(`${emoji.msg.ERROR} You can set only 5 bot chats!`)
          return message.channel.send({embeds: [ppp]})
        }
        if (args[0] == "reset") {
            guildData.botChannels = [ ];
            guildData.save()
            const ttt = new MessageEmbed()
            .setColor(ee.color)
            .setAuthor(`${message.author.tag} - Setchannel`, message.author.displayAvatarURL())
        .setDescription(`${emoji.msg.SUCCESS} | Successfully Removed All The Channels`)
        return message.channel.send({embeds: [ttt]});
        }
    
        //push it into the database
        guildData.botChannels.push(channel.id)
        guildData.save();
        //send informational message
        const tttt = new MessageEmbed()
        .setColor(ee.color)
        .setAuthor(`${message.author.tag} - Setchannel`, message.author.displayAvatarURL())
        .setDescription(`${emoji.msg.SUCCESS} | Successfully Whitelisted \`${channel.name}\``)
        return message.channel.send({embeds: [tttt]});
      } catch (e) {
        console.log(String(e.stack).bgRed)
        const emesdf = new MessageEmbed()
        .setColor(ee.wrongcolor)
        .setAuthor(`An Error Occurred`)
        .setDescription(`\`\`\`${e.message}\`\`\``);
        return message.channel.send({embeds: [emesdf]});
      }
    }
  };