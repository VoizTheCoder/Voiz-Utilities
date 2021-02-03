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


  client.on('message', message => {
    
    if (!message.guild) return;
  
  
    if (message.content.startsWith('!ban')) {
      const user = message.mentions.users.first()
    
      if (user) {
       
        const member = message.guild.member(user);
     
        if (member) {
         
          member.ban({
            reason: 'Moderation Ban',
          }).then(() => {
            message.reply(`Successfully banned ${user.tag}, Why Would They Be So Bad!`); // this is the message that will be.
          }).catch(err => {
          
            message.reply('I Could Not Ban This User. Make Sure To Check If Their Roles Are Above Mine Or They Have Adminsistrator Permissions!'); // if a user does not have permission to use a command on a user or as a member, this message will be send.
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

const { MessageEmbed } = require('discord.js');
const ms = require('ms');

module.exports = {
    name: 'slowmode',
    run: async (client, message, args) => {

        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('You do not have **MANAGE_CHANNELS** permission!').then(m => m.delete({ timeout: 5000 }));

        if (!args[0]) return message.channel.send('You did not specify a time!').then(m => m.delete({ timeout: 5000}));

        const currentCooldown = message.channel.rateLimitPerUser;

        const reason = args[1] ? args.slice(1).join(' ') : 'no reason';

        const embed = new MessageEmbed()
            .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));

        if (args[0] === 'off') {

            if (currentCooldown === 0) return message.channel.send('Channel cooldown is already off').then(m => m.delete({ timeout: 5000 }));

            embed.setTitle('Slowmode Disabled')
                .setColor('#00ff00')
            return message.channel.setRateLimitPerUser(0, reason)

        }

        const time = ms(args[0]) / 1000;

        if (isNaN(time)) return message.channel.send('not a valid time, please try again!').then(m => m.delete({ timeout: 5000 }));

        if (time >= 21600) return message.channel.send('That slowmode limit is too high, please enter anything lower than 6 hours.').then(m => m.delete({ timeout: 5000 }));

        if (currentCooldown === time) return message.channel.send(`Slowmode is already set to ${args[0]}`);

        embed.setTitle('Slowmode Enabled')
            .addField('Slowmode: ', args[0])
            .addField('Reason: ', reason)
            .setColor('#ff0000');

        message.channel.setRateLimitPerUser(time, reason).then(m => m.send(embed));

    }
}