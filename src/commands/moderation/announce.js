const announceEmbed = require('../../embeds/announceEmbed');
const {Permissions} = require('discord.js')
module.exports.run = async (client, message, args) => {
  const prefix = require('../../config.json').prefix
  const guild_id_2 = '';
  const guild_2 = client.guilds.cache.map(guild => guild.id);
  console.log(guild_2);
  console.log(message.content.length)
  if(!args[0]){
    await message.channel.send('<a:lockdown:1004710301876363384>| Invalid Arguments! \n ``!announce <phrase> <channel>`` \n ``No Whitespaces Allowed``')
  }else{
    if(!message.content.includes('<#')){
      await message.channel.send('<a:lockdown:1004710301876363384>| Invalid Arguments! \n ``!announce <phrase> <channel>`` \n ``No Whitespaces Allowed``')
    }
  }
  // if(message.content.length > 31){
  //   await message.channel.send('Invalid Arguments! \n ``!announce <phrase> <channel>``')
  // }
  
  if(message.member.permissions.has(Permissions.FLAGS.MODERATE_MEMBERS)){
    if(message.content.includes('<#')){
      console.log('pass 1')
      if(message.content.length > 31){
        console.log("pass 2");
        if(!args[0].replace(/\s/g, "").length <=0){
          console.log("pass 3");
          const send_msg = await message.channel.send('Announcing <a:ColourLoading:1004710269626355762>')
          let length = message.content.length;
          console.log(message.content.slice(0, length) + ", " + length)
          let string_1 = message.content.slice(prefix.length + 8, length);
          
          let data_1 = string_1.split(' <#');
          console.log(data_1)
          const send_message = data_1[0]
          const sp2 = data_1[1].split('>');
          
          const send_channel_id = sp2[0];
          const send_channel = client.channels.cache.find(channel => channel.id == send_channel_id)
          console.log(message.author)
          await send_channel.send(send_message).then(sent_message => {
            const SendAnnounce = announceEmbed.setDescription(`<a:7131discordverifygreen:1004710211501690960> The Announcement Was Made Successfully In ${'<#' + send_channel_id + '>'} \n👤Author: ${message.author.username}\n🗯Message: ${send_message}\n [👉Jump To Message!](${'https://discordapp.com/channels/'+ sent_message.guild.id + '/' + send_channel_id + '/' + sent_message.id}) \n\n\n [⚙𝐀𝐝𝐝 𝐊𝐫𝐲𝐬𝐭𝐚𝐥 𝐓𝐨 𝐘𝐨𝐮𝐫 𝐒𝐞𝐫𝐯𝐞𝐫!](https://discord.com/api/oauth2/authorize?client_id=928915990836805652&permissions=8&scope=applications.commands+bot)`)
            // message.channel.send(`The Message was announced successfully in <#${send_channel_id}>! Follow this link to go to the message. \n https://discordapp.com/channels/` + sent_message.guild.id + '/' + send_channel_id + '/' + sent_message.id)
            send_msg.edit({content: '**<a:7131discordverifygreen:1004710211501690960> Success!**', embeds: [SendAnnounce]})
            message.delete()
          })
        }
      }else{
        await message.channel.send('<a:lockdown:1004710301876363384>| Invalid Arguments! \n ``!announce <phrase> <channel>`` \n ``No Whitespaces Allowed``')
      }
    }
  }else{
    message.channel.send("**<a:Security_Loading:1004710279025807431>| Only Moderators can use this command!\nYou Need `MODERATE_MEMBERS` Permission!**")
  }
}