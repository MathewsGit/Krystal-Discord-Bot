module.exports.run = async (client, message, args) => {
  const { MessageAttachment } = require('discord.js');
  const { MessageEmbed } = require('discord.js');
  const file = new MessageAttachment('./src/avatar/krystal_main.png');
  const helpEmbed = require('../../embeds/helpEmbed')

  helpEmbed.setAuthor({name: 'Krystal', iconURL: `https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}`, url: 'https://neo-blog.netlify.app'})
  .setThumbnail(`https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}`)

  await message.channel.send({
    embeds: [helpEmbed]
  })
}