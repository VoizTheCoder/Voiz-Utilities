const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!"

client.once('ready',  () => {
    console.log('Ready');
	client.user.setActivity(`For The Rule Breakers`, {type:'WATCHING'}); 
}); 

client.login(process.env.token);

client.on('message', message => {
	if (message.content === '!serverinfo') {
		message.channel.send('Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\n Created At: ${message.guild.createdAt}\n Server Region: ${message.guild.region} ');
	}
});

