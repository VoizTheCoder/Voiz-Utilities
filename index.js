const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';

client.once('ready',  () => {
    console.log('Ready');
	client.user.setActivity(`Thanks for 100 Subscribers!`, {type:'WATCHING'}); 
}); 

client.login(process.env.token)

client.on('guildBanAdd', async (guild, user) => {
	console.log(`${user.tag} got hit with the ban hammer in the ${guild.name}.`);
});

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
		message.channel.send('The bots ping is 56ms'); 
	}
});


client.on('message', message => {
	if (message.content === '!help') {
		message.author.send(` HELP \n\n __Moderation__ \n !kick <user> <reason> \n !ban <user> <reason>\n\n__Misc__ \n!serverinfo = Get A List Of The Servers Information (For the server you use the command in)\n!userinfo = Get Some User Information\n!ping = Play Ping Pong! \n\n\n For Extra Help Contact VoizX#6969`)
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
		message.channel.send('This is A Test Message By Voiz Utilities \n\n All Functions Working Properly.')
		message.react('💤');
	}
});

client.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;



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

    if(cmd === "!unban") {
        let toBan = await bot.users.fetch(args[0])

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You need permissions!") 
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Bot need permissions!") 

        const reason = args[1] || "There was no reason!";

        message.guild.members.unban(toBan, reason)

        message.channel.send(`${toBan} has been unbanned from the server!`)
    }

})

client.on('message', message =>{
 
    let args = message.content.substring(prefix.length).split(" ")
 
    switch(args[0]){
        case'kick':
        if(!args[1]) message.channel.send('Please Specify a person!')
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You don't have permission to do that :x:")
        const user = message.mentions.users.first();
 
        if(user){
            const member = message.guild.member(user);
 
            if(member){
                member.kick('Kicked !').then(() =>{
                    message.reply(`Kicked ${user.tag}`)
                }).catch(err =>{
                    message.reply("I can't kick the user :x:")
                    console.log(err)
                });
            } else{
                message.reply("Is not in the server :x:")
            }
        }
        break;
    }
})

client.on('message', message => {
	if (message.content === '!status') {
		message.channel.send(`The Bots Current Activity Is ${presense.Activity[0].name}`)
	}
});