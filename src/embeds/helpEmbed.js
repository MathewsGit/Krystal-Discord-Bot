const {MessageEmbed} = require('discord.js')
module.exports =  new MessageEmbed()
	.setColor('#4ddbff')
	.setTitle('**Help Menu<a:Blue_crystal:1004762144287502386>**')
	// .setAuthor({ name: 'Krystal', iconURL: `https://cdn.discordapp.com/avatars/928915990836805652/e57f6563e4c3e0172d0cd26eae2f115a`, url: 'https://neo-blog.netlify.app' })
	.setDescription('')
	.setThumbnail(`https://cdn.discordapp.com/avatars/928915990836805652/e57f6563e4c3e0172d0cd26eae2f115a`)
	// .addFields(
	// 	{ name: '``Prefix: [!]``', value: '**Slash Commands Available!**' },
	// 	{ name: '\u200B', value: '\u200B' },
	// 	{ name: '💭General Commands', value: '\u200b', inline: false },
	// 	{ name: 'Ping', value: '``!ping``', inline: true },
	// 	{ name: '💻Moderation Commands', value: '\u200b', inline: false },
		
	// )
	// .addField('Announce', '```!announce <phrase> <#channel>```', false)
	// .setImage('attachment://krystal_main.png')
	//hi
	
	.setTimestamp(Date.now())
	.setFooter({ text: '', iconURL: `https://cdn.discordapp.com/avatars/928915990836805652/e57f6563e4c3e0172d0cd26eae2f115a` });