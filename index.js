const Discord = require('discord.js');
const client = new Discord.Client();


client.once('ready',  () => {
    console.log('Voiz Utilities is online!');
	client.user.setActivity(`Voiz's Servers`, {type:'WATCHING'});
}); 

client.login(process.env.token);

client.on('message', message => {
	if (message.content === '!devs') {
		message.channel.send('The Scripter is Voiz#6969 & Tester is Mushy#0013');
	}
});

client.on('message', message => {
	if (message.content === '!help') {
		message.channel.send('For Extra Support Join The Voiz Utilities Discord Server: https://discord.gg/4HU6qreYAu \n \n Type `!commands` to see the commands');
	}
});

client.on('message', message => {
	if (message.content === '!servers') {
		message.channel.send('The Bot is in  \n \n Voiz Dream World: https://discord.gg/EXzPbrp6yZ \n Voiz Utilities Bot Hub: https://discord.gg/4HU6qreYAu \n \n With More To Come!  ');
	}
});

client.on('message', message => {
	if (message.content === '!commands') {
		message.channel.send(' Last Updated 14/01/21 \n The Current Commands Are: \n `!devs` Get a list of the bots Scripters and testers \n `!servers` Get A list of the servers the bot is in \n `!help` Get Help. \n `!rules` View the servers Rules \n `!weclome` Welcome A user to the server!');
	}
});

client.on('message', message => {
	if (message.content === '!rules') {
		message.channel.send('Please Specify Which Server \n \n Voiz Dream World: !Rules VDW \n Voiz Utilities Bot Hub: !Rules VBotHub');
	}
});

client.on('message', message => {
	if (message.content === '!rules VDW') {
		message.channel.send('Sorry. We Hit A RoadBlock. The Command `!rules VDW` is currently disabled. Try Again Later');
	}
});

client.on('message', message => {
	if (message.content === '!rules VBotHub') {
		message.channel.send('Sorry. We Hit A RoadBlock. The Command `!rules VBotHub` is currently disabled. Try Again Later');
	}
});

client.on('message', message => {
	if (message.content === '!welcome') {
		message.channel.send('Welcome!');
	}
});

client.on('message', message => {
	if (message.content === 'secret') {
		message.channel.send('Shhh!');
	}
});

client.on('message', message => {
	if (message.content === '!meme') {
		message.channel.send('Sorry. The Command `!meme` is currently a feature for the future. If you want to receive updates. Join The Voiz Utilities Server! \n https://discord.gg/4HU6qreYAu');
	}
}); 

module.exports = {
    name: '!kick', 
    description: "this command kicks a member!",
    execute(message, args){
        const member = message.mentions.users.first();
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You do not have perm to use the \"kick\" command.")
        if(!args[0]) return message.channel.send('who do you want kicked')
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick({reason:`${args[1]}`});
            message.channel.send(`User has been kicked , reason:${args[1]}`);

        }
	}
	
	module.exports = {
		name: '!ban', 
		description: "this command bans a member!",
		async execute(message, args, Discord, client){
			
			if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("❌You cannot use that!")
			if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('I don\'t have the right permissions!')
			const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
			if (!args[0]) return message.channel.send("❌**Please mention someone!**");
			if (!member) return message.channel.send("❌**Could not find that member!**")
	
		   message.channel.send(`${member} has been baned`)
					member.ban({})
				}
	
		}