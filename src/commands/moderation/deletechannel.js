module.exports.run = async(client, message, args) => {
  if(message.guild.me.permissions.has('MANAGE_CHANNELS')){
    if(!message.content.includes('<#')){
      message.channel.send("<a:lockdown:1004710301876363384>| Invalid Arguments! \n ``!deletechannel <#channel>``")
    } else{
      const msg = await message.channel.send('**DELETING CHANNEL <a:ColourLoading:1004710269626355762>**')
      const dl_ch_id = args[0].split('<#')
      const dl_id = dl_ch_id[1].split('>')
      const del_chnl = client.channels.cache.find(channel => channel.id == dl_id[0])
      const del_ch = client.channels.cache.get(dl_id[0])
      try {
        await del_chnl.delete().then(data => {
          msg.edit({content: "**<a:7131discordverifygreen:1004710211501690960> Channel Deleted Successfully!**"})
          message.delete()
        }).catch(error => {
          msg.edit({content: "**<a:lockdown:1004710301876363384>| Whoops! There Was An Error**"})
          console.log(error)
        })
      } catch (error) {
        msg.edit({content: "**<a:lockdown:1004710301876363384>| Whoops! There Was An Error**"})
        console.log(error)
      }
    }
  }else{
    await message.channel.send("**<a:Security_Loading:1004710279025807431>| Bot Doesn't Have Permissions To Do That!**")
  }
}