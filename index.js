const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";

client.once('ready',  () => {
    console.log('Ready');
	client.user.setActivity(`${client.guilds.cache.size} Servers. Use !help`, {type:'WATCHING'}); 
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
		message.author.send(` HELP \n\n**Misc** \n!serverinfo = Get A List Of The Servers Information (For the server you use the command in)\n!userinfo = Get Some User Information\n!ping = Play Ping Pong! \n\n\n\n\n\n\n\n\n !report = Send A Report`)
        message.react('📣');
	}
});

client.on('message', message => {
	if (message.content === '!report') {
		message.author.send('To Send A Report Please Message VoizX#6969');
	}
});

client.on('message', message => {
	if (message.content === '!furret') {
		message.channel.send(`Are You A Furret?`)
        message.react('✅');
        message.react('❌');
	}
});


client.on('message', message => {
	if (message.content === '!test') {
		message.author.send('Tested!')
		message.react('💤');
	}
});

client.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;


    //args system that is very required!!!!
    let messageArray = message.content.split(" ")
    let args = messageArray.slice(1);

    let cmd = messageArray[0];

    if(cmd === "!ban") {
        let toBan = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You need permissions!") 
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Bot need permissions!") 

        const reason = args[1] || "There was no reason!";

        toBan.ban({
            reason: reason
        })
        message.channel.send(`${toBan} has been banned from the server!\nReason: ${reason}`)
    }

    if(cmd === "?unban") {
        let toBan = await bot.users.fetch(args[0])

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You need permissions!") 
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Bot need permissions!") 

        const reason = args[1] || "There was no reason!";

        message.guild.members.unban(toBan, reason)

        message.channel.send(`${toBan} has been unbanned from the server!`)
    }

})

let messageArray = message.content.split(" ");
let args = messageArray.slice(1);
let cmd = messageArray[0];

 if(cmd === '?tempmute'){
	if(message.member.hasPermission('MANAGE_MESSAGES')) {
		var member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
		if(!member) return message.reply('Please Provide a Member to TempMute.')

		let mainrole = message.guild.roles.cache.find(role => role.name === "Member");
		let role = message.guild.roles.cache.find(role => role.name === "Muted");

		if (!role) return message.reply("Couldn't find the 'muted' role.")

		let time = args[1];
		if (!time) {
			return message.reply("You didnt specify a time!");
		}

		member.roles.remove(mainrole.id)
		member.roles.add(role.id);

		message.channel.send(`@${member.user.tag} has now been muted for ${ms(ms(time))}`)

		setTimeout( function () {
			member.roles.add(mainrole.id)
			member.roles.remove(role.id);
			message.channel.send(`@${member.user.tag} has been unmuted.`)
		}, ms(time));

	} else {
		return message.channel.send('You dont have perms.')
	}
}