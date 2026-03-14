module.exports.run = async (client, message, args) => {
  if(!args[0]){
    await message.channel.send("**<a:lockdown:1004710301876363384> Please provide a phrase to be sent!**")
  }else {
    await message.channel.send(args.join(' '))
  }
}