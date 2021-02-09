const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';


client.once('ready',  () => {
    console.log('Ready');
	client.user.setActivity(`${client.guilds.cache.size} Servers!`, {type:'WATCHING'}); 
}); 
