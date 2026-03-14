module.exports.run = async(client, message, args) => {
  if(message.guild.me.permissions.has('MANAGE_CHANNELS')){
    if(!args[0]){
      await message.channel.send('<a:lockdown:1004710301876363384>| Invalid Arguments! \n ``!addchannel <channel name>``')
    }else{
      const msg = await message.channel.send("**CREATING TEXT CHANNEL <a:ColourLoading:1004710269626355762>**")
      await message.guild.channels.create(args.join(' '), {
        type: 'text', 
        permissionOverwrites: [{
          id: message.guild.id,
          allow: ['VIEW_CHANNEL']
        }]
      }).then(data => {
        console.log(data)
        msg.edit({content: "**<a:7131discordverifygreen:1004710211501690960> Channel Created Successfully!**"})
        message.delete()
      }).catch(error => {
        msg.edit({content: "**<a:lockdown:1004710301876363384>| Whoops! There Was An Error**"})
      })
      
    }
  }else{
    await message.channel.send("**<a:Security_Loading:1004710279025807431>| Bot Doesn't Have Permissions To Do That!**")
  }
}