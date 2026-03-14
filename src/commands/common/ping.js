module.exports.run = async (client, message, args) => {
  const msg = await message.channel.send('Pinging...');
  await msg.edit(`**<a:Loading:1004710260881244190> Bot Latency: ${Date.now() - msg.createdTimestamp}ms.**`).then(data => {
    message.delete()
  }).catch(err => {
    
  })
}