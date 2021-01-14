const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(process.env.token);

client.on('message', message => {
	if (message.content === '!dev') {
		message.channel.send('The Developer is Voiz');
	}
});
client.on("message", (message) => {
	//let's use something like a spam variable for 10 or more messages sent within 5000ms
	if(message.content === spam) {
		message.reply("Warning: Spamming in this server is forbidden.");
		console.log(message.author.username + " (" + message.author.id + ") has sent 10 messages or more in 5 seconds in " + message.channel.name + ".");
	  }
	});