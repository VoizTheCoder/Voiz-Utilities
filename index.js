const Discord = require('discord.js');
const client = new Discord.Client();


client.once('ready',  () => {
    console.log('Voiz Utilities is online!');
    client.user.setActivity(`!help in ${client.guilds.cache.size} servers!`, {type:'PLAYING'});
}); 

client.login(process.env.token);

client.on('message', message => {
	if (message.content === '!devs') {
		message.channel.send('The Scripter is Voiz#7752 & Tester is Mushy#6486');
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
client.on('message', message => {
 
	if (!message.guild) return;
   
   
	if (message.content.startsWith('!kick')) { //**This is the command, this says if someone says ?kick then pay attention to teh rest to teh bot.**\\ 
	  
	  const user = message.mentions.users.first(); // This says if you mention this user, it is talking about that user
	 
	  if (user) {
	 
		const member = message.guild.member(user);
	  
		if (member) {
	   
		  member.kick('Optional reason that will display in the audit logs').then(() => {
		 
			message.reply(`Successfully kicked ${user.tag}`);
		  }).catch(err => {
		   
			message.reply('I was unable to kick the member. Check if their roles are higher then mine or if they have administrative permissions!');
			
			console.error(err);
		  });
		} else {
		 
		  message.reply('That user isn\'t in this guild!');
		}
   
	  } else {
		message.reply('You didn\'t mention the user to kick!'); // Thus is creating a message so that you know if you failed 
  // The / is to show the script that the (') is not the end of it
	  }
	}
  });
  client.on('message', message => {
    
    if (!message.guild) return;
  
  
    if (message.content.startsWith('!ban')) {
      const user = message.mentions.users.first()
    
      if (user) {
       
        const member = message.guild.member(user);
     
        if (member) {
         
          member.ban({
            reason: 'They were bad!',
          }).then(() => {
            message.reply(`Successfully banned ${user.tag}`); // this is the message that will be.
          }).catch(err => {
          
            message.reply('I was unable to ban the member. Check if their roles are higher then mine or if they have administrative permissions!'); // if a user does not have permission to use a command on a user or as a member, this message will be send.
//** for my bot I would say message.reply(`${author.tag}, sorry, I was unable to ban this user! Check to see if there roles are above mine, or if this user is an admin!`)**\\
        
            console.error(err);
          });
        } else {
         
          message.reply('That user isn\'t in this guild!');
        }
      } else {
      
        message.reply('You didn\'t mention the user to ban!');
      }
    }
  });

  exports.run = async (client, message, args) => {
   
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You do not have permission for this command!");
    if(!args[0]) return message.channel.send("Enter a user!");    
    let user = message.guild.member(message.mentions.users.first());
    if (!user) return message.channel.send("Enter a valid user!");
    if (user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You cannot ban this person!");
    var tempBanTime = args[1];
    if(!tempBanTime) return message.channel.send("Specify a time!");
    const reason = args.splice(2, args.length).join(' ') || `**No reason given**`;
    
    let banEmbed = new Discord.RichEmbed()
    .setTitle(`You are temporarily banned from the **${message.guild}** discord server!`)
    .setColor("#ff0000")
    .setThumbnail(client.user.displayAvatarURL)
    .addField("Banned by:", message.author)
    .addField("Ban time:", tempBanTime)
    .addField("Reason:", reason);
    try {
    await user.send(banEmbed);
    } catch (error) {
        message.channel.send(`Could not send a DM message to the person!`)
    }
    if (ms(tempBanTime)){
  
        await message.guild.member(user).ban(args[2]);
 
        setTimeout(function(){
           
            message.guild.unban(user.id);
 
            const unbanEmbed = new Discord.RichEmbed()
            .setTitle(`<a:check:695528011574935552> ${user.user.username} is a successfully unband!`)
            .setColor("#00ff00")
            .setThumbnail(client.user.displayAvatarURL)
            .addField("Ban time:", tempBanTime)
            .addField("Reason:", reason)
            modChannel.send(unbanEmbed);
       }, ms(tempBanTime));
 
    }
 
    return message.channel.send(`${user} has been successfully banned for ${tempBanTime}`)
 
}