const {MessageEmbed} = require('discord.js')
module.exports.run = async(client, message, args) => {
    // console.log(message)
    // console.log(message.guild)
    // console.log(message.guild.channels)
    // console.log(message.guild.bans)
    console.log(message.guild)
    const send_msg = await message.channel.send('**LOADING SERVER PROFILE <a:ColourLoading:1004710269626355762>**')
    const guild_data = message.guild
    const guild_id = guild_data.id
    const guild_name = guild_data.name
    const guild_icon = `https://cdn.discordapp.com/icons/${guild_id}/${guild_data.icon}.png`
    const guild_verify = guild_data.verificationLevel
    const guild_mc = '`' + guild_data.memberCount + '`'
    const guild_rules = `<#${guild_data.rulesChannelId}>`
    const guild_owner = `<@${guild_data.ownerId}>`
    const guild_tc = client.channels.cache.filter(channel => channel.guildId == guild_id).filter(channel => channel.type === 'GUILD_TEXT').size
    const guild_vc = client.channels.cache.filter(channel => channel.guildId == guild_id).filter(channel => channel.type === 'GUILD_VOICE').size
    const guild_cg = client.channels.cache.filter(channel => channel.guildId == guild_id).filter(channel => channel.type === 'GUILD_CATEGORY').size
    const guild_ac = client.channels.cache.filter(channel => channel.guildId == guild_id).filter(channel => channel.type !== 'GUILD_CATEGORY').size
    let guild_bans_list = ''
    let guild_total_bans = 0
    const guild_bans = await message.guild.bans.fetch().then(bans => {
        console.log('______________member_______________')
          
        let list = bans.map(user => '<@' + user.user.id + '>').join('\n');
          
        if (list.length >= 1950) list = `${list.slice(0, 1948)}`;
        guild_bans_list = list;
        guild_total_bans = bans.size;

        if(bans.size == 0) {
            guild_total_bans = 0;
        }
      })
      .catch(console.error);




    const ServerInfo = new MessageEmbed()
    .setTitle('<a:discordcrown:1004710216476131398>| Server Info')
    .setDescription("**<a:logserver:1004710223728087111> SERVER ID: **`" + guild_id + "`\n" + "**<a:discordcrown:1004710216476131398> NAME: **`" + guild_name + "`\n" + "**<a:owner:1004710187367673906> OWNER: **" + guild_owner + "\n" + "**<a:IconAccount:1004710170145853593> OWNER ID: **`" + guild_data.ownerId + "`\n" + "**<a:7131discordverifygreen:1004710211501690960> VERIFICATION LEVEL: **`" + guild_verify + "`\n" + "**<a:IconUsers:1004710196955852842> TOTAL MEMBERS: **`" + guild_mc + "`\n" + "**<a:rules2:1004710194879676508> RULES CHANNEL: **" + guild_rules + "\n" + "**<a:TypingDot:1004710226727014530> TEXT CHANNELS: **`" + guild_tc + "`\n" + "**<a:sound1:1004710172041687052> VOICE CHANNELS: **`" + guild_vc + "`\n" + "**<a:IconCategory:1004710184968532028> CATEGORIES: **`" + guild_cg + "`\n" + "**<a:loadingindustry:1004710272876937286> TOTAL CHANNELS: **`" + guild_ac + "`\n"+ "**<a:block:1004710285585682482> TOTAL BANS: **`" + guild_total_bans + "`\n"+ "**<a:BANNED:1004710253398601738> ALL BANS: **Use `!bans` Command" + "`\n"+ "**<a:create:1004710167830605874> CREATED ON: " + guild_data.createdAt.toDateString() + "**")
    .setColor('DARK_GREEN')
    .setTimestamp(Date.now())
    .setThumbnail(guild_icon);
    // console.log(message.guild)
    send_msg.edit({content: '**<a:YLC_SlowAnimatedBlockCM:1004710292086849596> Success**', embeds: [ServerInfo]})
}