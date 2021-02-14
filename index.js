const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";

client.once('ready',  () => {
    console.log('Ready');
	client.user.setActivity(`For The Rule Breakers`, {type:'WATCHING'}); 
}); 

client.login(process.env.token);

client.on('message', message => {
	if (message.content === '!serverinfo') {
		message.channel.send(`Server name: ${message.guild.name} \nTotal members: ${message.guild.memberCount}\n Created At: ${message.guild.createdAt}\n Server Region: ${message.guild.region}`)
	}
});
client.on('message', message => {
	if (message.content === '!userinfo') {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`)
	}
});

client.on('message', message => {
	if (message.content === '!ping') {
		message.channel.send('Pong.');
	}
});


client.on('message', message => {
	if (message.content === '!help') {
		message.author.send(` HELP \n\n**Misc** \n !serverinfo = Get A List Of The Servers Information (For the server you use the command in)\n!userinfo = Get Some User Information\n!ping = Play Ping Pong!`)
	}
});