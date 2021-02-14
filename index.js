const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!"

client.once('ready',  () => {
    console.log('Ready');
	client.user.setActivity(`For The Rule Breakers`, {type:'WATCHING'}); 
}); 

client.login(process.env.token);

if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Invalid Permissions")
let User = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
if (!User) return message.channel.send("Invalid User")
if (User.hasPermission("BAN_MEMBERS")) return message.reply("Invalid Permissions")
let banReason = args.join(" ").slice(22);
if (!banReason) {
  banReason = "None"
}

User.ban({reason: banReason})