const {MessageEmbed} = require('discord.js')
const {MessageActionRow} = require('discord.js')
module.exports.run = async (client, message, args) => {
    const msg = await message.channel.send('**LOADING BANS <a:ColourLoading:1004710269626355762>**')
    const guild_icon = `https://cdn.discordapp.com/icons/${message.guild.id}/${message.guild.icon}.png`
    if(message.guild.me.permissions.has("BAN_MEMBERS")){

        await message.guild.bans.fetch().then(banned_members => {
            let Embed = new MessageEmbed()
            .setTitle('<a:wrong:1004710255919366185> SERVER BANS')
            .setColor('RED')
            .setTimestamp(Date.now())
            .setThumbnail(guild_icon);


            let ban_array = []
            let banned_members_array = []
            banned_members.map(user => {
                let ob = {username: user.user.username, id: user.user.id}
                banned_members_array.push(ob)
            })
            
            
            let total_bans = banned_members.size
            if(banned_members.size > 10){
                console.log(Math.floor(banned_members.size / 15) + 1)
                const pages = Math.floor(banned_members.size / 15) + 1
                for(let i = 0; i < pages; i++){
                    let push_obj = banned_members_array.slice(i*15, i*15 + 15 - 1)
                    ban_array.push(push_obj)
                    console.log(push_obj)
                }

                let index = 0
                index = 0
                let row = new MessageActionRow().setComponents([
                    {
                        type: 'BUTTON',
                        customId: '1',
                        emoji: '<a:leftaim:1006096463123722321>',
                        style: 'SECONDARY',
                        disabled: true
                    },
                    {
                        type: 'BUTTON',
                        customId: '2',
                        emoji: '<a:rightaim:1006096465598365726>',
                        style: 'SECONDARY',
                        disabled: index == pages -1
                    },
                ])

                let list2 = ban_array[index].map(user => `**<a:IconAccount:1004710170145853593> NAME: ${user.username}\n<a:logserver:1004710223728087111> ID: ${user.id}**`).join('\n\n')
                Embed = Embed.setDescription(list2 + `\n\n**TOTAL BANS: **${total_bans}\n **PAGE ${index + 1} / ${pages}**`)

                const msg_2 = msg.edit({embeds: [Embed], components: [row], fetchReply: true})


                try {
                    const col = msg.createMessageComponentCollector({
                        filter: i => i.user.id === message.author.id,
                        time: 60000
                    });
                    
                    col.on('collect', async (i) => {
    
    
                        let row2 = new MessageActionRow().setComponents([
                            {
                                type: 'BUTTON',
                                customId: '1',
                                emoji: '<a:leftaim:1006096463123722321>',
                                style: 'SECONDARY',
                                disabled: index == 0
                            },
                            {
                                type: 'BUTTON',
                                customId: '2',
                                emoji: '<a:rightaim:1006096465598365726>',
                                style: 'SECONDARY',
                                disabled: index == pages -1
                            },
                        ])
    
    
    
                        if (i.customId === '1'){
                            console.log(index + ' _ ' + pages)
                            if(index > 0){
                                console.log('index > 0')
                                index --
                                i.component.setDisabled(false)
                                row2 = new MessageActionRow().setComponents([
                                    {
                                        type: 'BUTTON',
                                        customId: '1',
                                        emoji: '<a:leftaim:1006096463123722321>',
                                        style: 'SECONDARY',
                                        disabled: false
                                    },
                                    {
                                        type: 'BUTTON',
                                        customId: '2',
                                        emoji: '<a:rightaim:1006096465598365726>',
                                        style: 'SECONDARY',
                                    
                                    },
                                ])
                            }
                            if(index == 0){
                                console.log('index == 0')
                                i.component.setDisabled(true)
                                row2 = new MessageActionRow().setComponents([
                                    {
                                        type: 'BUTTON',
                                        customId: '1',
                                        emoji: '<a:leftaim:1006096463123722321>',
                                        style: 'SECONDARY',
                                        disabled: true
                                    },
                                    {
                                        type: 'BUTTON',
                                        customId: '2',
                                        emoji: '<a:rightaim:1006096465598365726>',
                                        style: 'SECONDARY',
                
                                    },
                                ])
                            }
                        }
                        if(i.customId === '2'){
                            console.log(index + ' _ ' + pages)
                            index ++
                            if(index < pages - 1){
                                console.log('index < pages - 1')
                                row2 = new MessageActionRow().setComponents([
                                    {
                                        type: 'BUTTON',
                                        customId: '1',
                                        emoji: '<a:leftaim:1006096463123722321>',
                                        style: 'SECONDARY'
                                    },
                                    {
                                        type: 'BUTTON',
                                        customId: '2',
                                        emoji: '<a:rightaim:1006096465598365726>',
                                        style: 'SECONDARY',
                                        disabled: false
                                    },
                                ])
                                
                            }
                            if(index == pages - 1){
                                console.log('index == pages - 1')
                                row2 = new MessageActionRow().setComponents([
                                    {
                                        type: 'BUTTON',
                                        customId: '1',
                                        emoji: '<a:leftaim:1006096463123722321>',
                                        style: 'SECONDARY',
                                        
                                    },
                                    {
                                        type: 'BUTTON',
                                        customId: '2',
                                        emoji: '<a:rightaim:1006096465598365726>',
                                        style: 'SECONDARY',
                                        disabled: true
                                    },
                                ])
                                
                            }
                        }
    
    
    
                        console.log(i.message.components)
                        
    
                        row.components = [
                            {
                                type: 'BUTTON',
                                customId: '1',
                                emoji: '<a:leftaim:1006096463123722321>',
                                style: 'SECONDARY',
                                disabled: index == 0
                            },
                            {
                                type: 'BUTTON',
                                customId: '2',
                                emoji: '<a:rightaim:1006096465598365726>',
                                style: 'DANGER',
                                disabled: index == pages - 1
                            },
                        ];
                        console.log(index)
                        let list3 = ban_array[index].map(user => `**<a:IconAccount:1004710170145853593> NAME: ${user.username}\n<a:logserver:1004710223728087111> ID: ${user.id}**`).join('\n\n')
                        Embed = Embed.setDescription(list3 + `\n\n**TOTAL BANS: **${total_bans}\n **PAGE ${index + 1} / ${pages}**`)
                        try {
                            await i.update({
                                content: 'hello',
                                components: [row2],
                                embeds: [Embed]
                            })
                        } catch (error) {
                            
                        }
                    })
                } catch (error) {
                    
                }
               
            }else{
                let list = banned_members.map(user => `**<a:IconAccount:1004710170145853593> NAME: ${user.user.username}\n<a:logserver:1004710223728087111> ID: ${user.user.id}**`).join('\n\n')
                if (list.length >= 1950) list = `${list.slice(0, 1948)}`;
                Embed = Embed.setDescription(list + `\n\n**TOTAL BANS: **${total_bans}`)
            }




            if(banned_members.size == 0){
                total_bans = 0
            }

            
            
    
            msg.edit({content: '**<a:YLC_SlowAnimatedBlockCM:1004710292086849596> Success**', embeds: [Embed]})
        })
    }else{
        msg.edit({content: "**<a:err:1004666440483340308>| Bot Doesn't Have Permissions To Do That!**"})
    }
}