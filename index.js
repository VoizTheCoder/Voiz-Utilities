const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';



client.on('message', message => {
 
	if (!message.guild) return;
   
   
	if (message.content.startsWith('!kick')) {
	  
	  const user = message.mentions.users.first(); // This says if you mention this user, it is talking about that user
	 
	  if (user) {
	 
		const member = message.guild.member(user);
	  
		if (member) {
	   
		  member.kick('User Was Kicked').then(() => {
		 
			message.reply(`Successfully kicked ${user}`);
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


  const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "ban",
    category: "moderation",
    run: async (client, message, args) => {
        if (!message.member.hasPermission('BAN_MEMBERS')) {
            return message.channel.send(`You are unable to ban members`)
        }
        if (!args[0]) {
            return message.channel.send(`Please mention a user!`)
        }
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        try {
            await member.ban();
            await message.channel.send(`${member} has been banned!`)
        } catch (e) {
            return message.channel.send(`User is not in the server!`)
        }

    }
}


  client.on('guildMemberAdd', member => { //This is creating an event saying when a member joins the server...
    
    const channel = member.guild.channels.find(ch => ch.name === 'general'); //** This is telling the script which server to send teh message in**\\
    
    if (!channel) return;
   
    channel.send(`Welcome To Voiz Dream World **${member}** Read the Rules and have a great time!`);
  }); // That up ^here^ tells the bot what channel to send the message in!

  client.on('message', message => {
	if (message.content === '!vinfo') {
		message.channel.send('Content Is Univalible, Java Script Could Not Load The Content');
	}
});

client.once('ready',  () => {
    console.log('Voiz Utilities is online!');
	client.user.setActivity(`Voiz Dream World│1.12`, {type:'WATCHING'});
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
		message.channel.send('The Command `!servers` Is Currently Disabled Due To Maintenance \n \n Developer Notice: Command Recieved JavaScript Error \n Set By Developer');
	}
});

client.on('message', message => {
	if (message.content === '!commands') {
		message.channel.send('The Command `!commands` Is Currently Disabled Due To Maintenance \n \n Developer Notice: Command Recieved JavaScript Error \n Set By Developer');
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

const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "lock",
    category: "moderation",
    run: async (client, message, args) => {
        const channels = message.guild.channels.cache.filter(ch => ch.type !== 'category');
        if (args[0] === 'on') {
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: false
                }).then(() => {
                    channel.setName(channel.name += `🔒`)
                })
            })
            return message.channel.send('locked all channels');
        } else if (args[0] === 'off') {
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: true
                }).then(() => {
                        channel.setName(channel.name.replace('🔒', ''))
                    }
                )
            })
            return message.channel.send('unlocked all channels')
        }
    }
}

