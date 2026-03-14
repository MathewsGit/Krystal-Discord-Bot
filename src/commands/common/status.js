const {MessageEmbed} = require('discord.js')
module.exports.run = async (client, message, args) => {
    let totalSeconds = (client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    const uptime = Date.now()

    const Embed = new MessageEmbed()
    .setFooter({text: "Krystal", iconURL: `https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}`})
    .setTimestamp(Date.now)
    .setThumbnail(`https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}`)
    .setColor('GREEN')
    .setTitle('<a:logserver:1004710223728087111> STATUS')
    .setDescription(`**Uptime: ${uptime}\n`)
    message.channel.send({embeds: [Embed]})
}