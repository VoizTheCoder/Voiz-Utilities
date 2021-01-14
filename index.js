const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(process.env.token);

client.on('message', message => {
	if (message.content === 'JanuarySale') {
		message.channel.send('Redeemed Code JanuarySale');
	}
});