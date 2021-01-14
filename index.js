const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(process.env.token);

client.on('message', message => {
	if (message.content === '!devs') {
		message.channel.send('The Scripter is Voiz#7752 & Tester is Mushy#6486');
	}
});

client.on('message', message => {
	if (message.content === '!help') {
		message.channel.send('For Extra Support Join The Voiz Utilities Discord Server: https://discord.gg/N3sbJbrXyr');
	}
});

client.on('message', message => {
	if (message.content === '!servers') {
		message.channel.send('Servers This Bot is used in is: \n Voiz Dream World: https://discord.gg/EXzPbrp6yZ \n Voiz Utilities Bot Hub: https://discord.gg/N3sbJbrXyr \n \n With More To Come!  ');
	}
});