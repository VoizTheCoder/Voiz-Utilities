const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!"

client.once('ready',  () => {
    console.log('Ready');
	client.user.setActivity(`For The Rule Breakers`, {type:'WATCHING'}); 
}); 

client.login(process.env.token);
