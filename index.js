const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(process.env.token);

// Auto Moderation

if (command === 'Fuck') {
	-	message.channel.send('Dont Say That');
	+	client.commands.get('ping').execute(message, args);
	}