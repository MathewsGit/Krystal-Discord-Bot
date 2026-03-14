module.exports.run = async(client, message, args) => {
    const prefix = require('../../config.json')
    const wrn = await message.channel.send('Warning <a:ColourLoading:1004710269626355762>')
    const { Permissions } = require('discord.js')
    console.log(message.mentions.users[0])
    if(!message.mentions.users){
        message.channel.send('<a:err:1004666440483340308>| NO User Specified To Warn! \n``!warn <user> <reason>``')
    }else{
        // const user = message.mentions.users.first() || message.guild.members.cache.get(m2[0])
        // console.log(m2);
        // try{
        //     client.users.fetch(user => user.id == m2[0]).then(user => {
        //         console.log(user);
        //     })
        // }catch{
        //     console.log("nope " + m2[0]);
        // }
        // try {
        //     client.users.find(user_fetched => user_fetched.id == m2[0]).then(user_fetched2 => {
        //         console.log(user_fetched2);
        //     })
        // } catch (error) {
        //     console.log("nope" + m2[0]);
        // }
        // console.log(client.users.fetch(user => user.id == m2[0]));
        // client.users.fetch(user => user.id == '691671337822846997').then(user => {
        //     user.send("you have been warned")
        //     console.log(user);
        // })
        // // user.send("you're warned!")

        // console.log(message)
        // console.log(args[0])
        if(!message.content.includes('<@')){
            wrn.edit('**<a:err:1004666440483340308>| Please Specify Valid User!**')
        }else{
            const m1 = args[0].split('<@')
            console.log(m1);
            const m2 = m1[1].split('>')
            let dUser =
            message.mentions.users.first() ||
            message.guild.members.get(args[0]);
            if (!dUser) return message.channel.send("**<a:err:1004666440483340308>| Can't find user!**");

            // let Author = client.users.cache.find(user => user.id = message.author.id)
            // console.log("__________________________ author data ________________________");
            // console.log(message.author);
            // console.log("__________________________ author data ________________________");

            // console.log(message.member.hasPermission('MODERATE_MEMBER'));

            if (message.member.permissions.has(Permissions.FLAGS.MODERATE_MEMBERS)){
                let dMessage = message.content.slice(prefix.length + 4).split('> ')[1]
                if (dMessage.length < 1) return message.channel.send('**You must provide a message!**');
                console.log(message.guild);
                await dUser.send(`**<a:lockdown:1004710301876363384> You've been warned in ${message.guild.name} for ${dMessage}!**`).then(g => {
                    message.author.send(
                        `**<a:7131discordverifygreen:1004710211501690960> You have warned ${dUser} for ${dMessage}!**`
                    );
                    wrn.edit(`**<a:7131discordverifygreen:1004710211501690960> Warned ${dUser} Successfully!\nUser: ${dUser}\nReason: ${dMessage}**`)
                    message.delete()
                }).catch(error => {
                    wrn.edit(`**<a:lockdown:1004710301876363384>| Couldn't Warn User! Please Try Again!**`)
                })
            }else{
                message.channel.send("**<a:Security_Loading:1004710279025807431>| Only Moderators can use this command!\nYou Need `MODERATE_MEMBERS` Permission!**")
            }
            // return message.channel.send("You can't you that command!");
        }
    }
}