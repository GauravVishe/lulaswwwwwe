const { MessageEmbed } = require("discord.js");
const emoji = require(`../../botconfig/emojis.json`);
const embed = require(`../../botconfig/embed.json`);
const prettyMiliSeconds = require("pretty-ms");

module.exports = {
    name: "about",
    description: "About",
    category: "Info",
    run: async (client, message, args, guildData, player, guild) => {
        let premium = new MessageEmbed()
        .setAuthor(`${message.author.tag} - About`,  message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(
`
**Violent Music**
\`\`\`
Founders   :: VishaLOp
\`\`\`
`
)
.setColor(`#ff0000`) 

message.channel.send({embeds: [premium]})
    }
}