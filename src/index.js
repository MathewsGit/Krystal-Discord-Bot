const Discord = require('discord.js');
const config = require("./config.json");
const fs = require('fs');
const {MessageEmbed} = require('discord.js')

var express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
var app = express();
app.use(cors())
app.use(express.json())
app.set('port', (process.env.PORT || 5000));
//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});
//importing libraries required for the bot
const client = new Discord.Client({
  intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});


const token = config.token;
const prefix = config.prefix;

client.commands = new Discord.Collection();
const commonCommands = fs.readdirSync("./src/commands/common").filter(file => file.endsWith(".js"));
const moderationCommands = fs.readdirSync("./src/commands/moderation").filter(file => file.endsWith(".js"));
const commands = fs.readdirSync("./src/commands").filter(file => file.endsWith(".js"));



client.on("ready", async () => {
  console.log(`Logged in as ${client.user?.tag}`);

    console.log(client.guilds.cache.map(guild => guild.id).length)

  
    const guild_id = '';
    const guild = client.guilds.cache.get(guild_id);
    const server_no = client.guilds.cache.map(guild => guild.id).length
    let value = client.guilds.cache.reduce((a,b) => a+b.memberCount, 0)
    if(value<1000){
      value = 1000;
    }else{
      value = Math.round(value/1000);
    }
  
    const activities_list = [
      `${prefix}help`,
      `${server_no} servers..`,
      `${value}k People...`,
      `Prefix: [${prefix}]`
    ]
    setInterval(() => {
      const index = Math.floor(Math.random() * (activities_list.length -1) +1);
      client.user.setPresence({activities: [{name: `${activities_list[index]}`, type: "WATCHING"}]})
    }, 5000)

    let commands;

    if (guild) {
      commands = guild.commands
    } else {
      client.application?.commands
    }

    commands?.create({
      name: "ping",
      description: 'Bot Latency.'
    })

    commands?.create({
      name: "help",
      description: 'Displays Help Menu'
    })
})

client.on('interactionCreate', async(interaction) => {
  
})

client.on('messageCreate', async (message) => {
  if(message.author.bot){
    return
  }
  

  const botInfo = require('./embeds/mentionEmbed')
  if(message.mentions){
    console.log(message.mentions)
    console.log(message.mentions.everyone + '📢 everyone ping \n🖥' + message.guild.name + `\n#️⃣<#${message.channel.id}>  ${message.channel.name}\n🧑${message.author.username}`);
  }
  if(message.mentions.everyone = 'true'){
    console.log('msg sent')
  }
  if(message.mentions.everyone = 'false'){
    if(message.mentions.has(client.user)){
      if(message.content == '<@928915990836805652>'){
        message.reply({embeds: [botInfo]})
      }else{
        console.log(message.content + '\n\n');
      }
    }
  }
  if(message.content.startsWith(prefix)) {
    const mod_cmd = ['announce', 'createchannel', 'deletechannel', 'warn'];
    const cmn_cmd = ['help', 'membercount', 'ping', 'say', 'avatar', 'profile', 'hello', 'serverinfo', 'heck', 'bans', 'status']

    const args = message.content.slice(prefix.length).split(' ');
    const command_name = args.shift();

    
    if(mod_cmd.includes(command_name)){
      for(file of moderationCommands){
        const commandName = file.split(".")[0]
        const command = require(`./commands/moderation/${commandName}`)
        client.commands.set(commandName, command)
      }
    }
    if(cmn_cmd.includes(command_name)){
      for(file of commonCommands){
        const commandName = file.split(".")[0]
        const command = require(`./commands/common/${commandName}`)
        client.commands.set(commandName, command)
      }
    }
    console.log(`command name: ${command_name} \n ${cmn_cmd.includes(command_name)} \n ${mod_cmd.includes(command_name)}`)

    
    const command = client.commands.get(command_name);
    const {member, content, guild, channel} = message
    console.log(message)

    if(!command){
      message.reply("The command doesn't exist! Please try rephrasing it. ").catch((error) => console.log('error - command not found'))
    } else{
      command.run(client, message, args)
    }
    

   
  }
})

client.login(token)

