const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!"

client.once('ready',  () => {
    console.log('Ready');
	client.user.setActivity(`For The Rule Breakers`, {type:'WATCHING'}); 
}); 

client.login(process.env.token);

if (command === 'ban') {
	if (args.length < 2) {
		return message.reply('Please mention the user you want to ban and specify a ban reason.');
	}

	const user = getUserFromMention(args[0]);
	if (!user) {
		return message.reply('Please use a proper mention if you want to ban someone.');
	}

	const reason = args.slice(1).join(' ');
	try {
		await message.guild.members.ban(user, { reason });
	} catch (error) {
		return message.channel.send(`Failed to ban **${user.tag}**: ${error}`);
	}

	return message.channel.send(`Successfully banned **${user.tag}** from the server!`);
}