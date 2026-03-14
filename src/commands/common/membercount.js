module.exports.run = async (client, message, args) => {
  await message.channel.send("<a:IconUsers:1004710196955852842>** Your server has " + message.guild.memberCount + " members!**").then(data => {
    message.delete()
  }).catch(err => {
    
  })
}