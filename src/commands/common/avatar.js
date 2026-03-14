const AvatarEmbed = require('../../embeds/avatarEmbed')
module.exports.run = async (client, message, args) => {
    try {
        if(!message.content.includes('<@')){
            message.channel.send('<a:lockdown:1004710301876363384> No user specified!')
        }
        if(message.content.includes('&')){
            message.channel.send("<a:YLC_SlowAnimatedBlockX:1004710299238150144> Can't check Avatar of roles!")
        }
        if(message.content.includes('<@')){
            try {
                if(!message.content.includes('&')){
                    let split_1 = message.content.split('<@')
                    console.log(split_1)
                    split_1 = split_1[1].split('>')
                    console.log(split_1[0])
                    const mentionedUser = split_1[0]
                    let User =  message.mentions.users.first() || message.guild.members.get(mentionedUser)
                    console.log(User)
                    console.log(User.avatar)
                    const AvatarUrl = `https://cdn.discordapp.com/avatars/${User.id}/${User.avatar}`
                    const sendEmbed = AvatarEmbed.setImage(AvatarUrl)
                    .setTitle('<a:IconAccount:1004710170145853593> USER AVATAR')
                    .setThumbnail()
                    .setDescription(`<@${User.id}>'s Avatar!\n<a:invitelinks:1004721783330582619> [**.jpg**](${AvatarUrl + '.jpg'})  |  [**.png**](${AvatarUrl + '.png'})  |  [**.jpeg**](${AvatarUrl + '.jpeg'})`)
                    .setColor('GOLD') 
                    message.channel.send({embeds: [sendEmbed]})
                }
            } catch (error) {
                
            }
        }
    } catch (error) {
        
    }
}