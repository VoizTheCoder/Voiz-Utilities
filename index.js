const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(process.env.token);

if (command === 'JanuarySale') {
	-	message.channel.send('Redeemed');
	+	client.commands.get('ping').execute(message, args);
	}