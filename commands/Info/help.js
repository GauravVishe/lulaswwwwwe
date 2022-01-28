
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const emoji = require("../../botconfig/emojis.json");
module.exports = {
  name: "help",
  category: "Info",
  description: "Violent",
  run: async (client, message, args, guildData, player, prefix) => {
    try {

      


      const mainmenu = new MessageEmbed()
        .setAuthor("Violent Music Help Panel", ee.footericon)
        .setThumbnail(ee.footericon)
        .setDescription(`Hey! This is Violent. Am here to provide you 24/7 high quality music.`)
        .addField(`● Config [5]`, `\`24/7\`, \`djrole\`, \`prefix\`, \`toggle-np\`, \`setchannel\``)
        .addField(`● Filters [7]`, `\`8d\`, \`bassboost\`, \`nightcore\`, \`slowmo\`, \`speed\`, \`vaporwave\`, \`reset\``)
        .addField(`● Music [18]`, `\`autoplay\`, \`clearqueue\`, \`join\`, \`loop\`, \`nowplaying\`, \`pause\`, \`play\`, \`queue\`, \`remove\`, \`replay\`, \`resume\`, \`restart\`, \`resume\`, \`search\`, \`seek\`, \`shuffle\`, \`skip\`, \`skipto\`, \`stop\`, \`volume\``)
        .addField(`● Owner [3]`, `\`reload\`, \`eval\`, \`status\``)
        .addField(`● Premium [2]`, `\`addpremium\`, \`removepremium\``)
        .addField(`● Info [7]`, `\`config\`, \`help\`, \`invite\`, \`node\`, \`ping\`, \`stats\`, \`uptime\``)
        .addField(`● Links [2]`, `[Invite Me](${config.links.opmusicinv}) | [Support Server](https://discord.gg/KNWKXQS4gX)`)
        .setColor(`#ff0000`)



      message.channel.send({ embeds: [mainmenu] })
    } catch (e) {
      console.log(String(e.stack).bgRed)
      const emesdf = new MessageEmbed()
        .setColor(e. wrongcolour)
        .setAuthor(`An Error Occurred`)
        .setDescription(`\`\`\`${e.message}\`\`\``);
      return message.channel.send({ embeds: [emesdf] });
    }
  }
};

