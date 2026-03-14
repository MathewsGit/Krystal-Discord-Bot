const {MessageEmbed} = require('discord.js')
const AvatarEmbed = require('../../embeds/avatarEmbed')
module.exports.run = async (client, message, args) => {
    try {
        if(!message.content.includes('<@')){
            message.channel.send('<a:lockdown:1004710301876363384> No User Specified!')
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
                    console.log(message.guild)
                    console.log(User.avatar)
                    let Owner = false
                    if(message.guild.ownerId == User.id){
                        Owner = true
                    }
                    const AvatarUrl = `https://cdn.discordapp.com/avatars/${User.id}/${User.avatar}`
                    const sendEmbed = AvatarEmbed.setThumbnail(AvatarUrl)
                    .setImage()
                    .setTitle('<a:rainfall_kawaii_stars:1004710182233853992> USER PROFILE')
                    .setDescription(`<@${User.id}>'s Profile \n<a:invitelinks:1004721783330582619> [**.jpg**](${AvatarUrl + '.jpg'})  |  [**.png**](${AvatarUrl + '.png'})  |  [**.jpeg**](${AvatarUrl + '.jpeg'})\n\n**<a:owner:1004710187367673906> Name: ${User.username}\n<a:Hashtag:1004739096436031551> Tag: ${User.discriminator}\n<a:logserver:1004710223728087111> Id: ${User.id}\n<a:discordcrown:1004710216476131398> Bot: ${User.bot}\n<a:owner:1004710187367673906> Owner: ${Owner}**`)
                    .setColor('GOLD') 
                    message.channel.send({embeds: [sendEmbed]})
                }else{
                    message.channel.send("<a:YLC_SlowAnimatedBlockX:1004710299238150144>| Can't display Profile for roles!")
                }
            } catch (error) {
                
            }
        }
    } catch (error) {
        
    }
}