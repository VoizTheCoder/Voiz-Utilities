const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';


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
	client.user.setActivity(`${client.guilds.cache.size} Servers!`, {type:'WATCHING'}); 
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


client.on('message', message => {
    if (message.channel.type != 'text' || message.author.bot)
      return;
  
    let command = message.content.split(' ')[0].slice(1);
    let args = message.content.replace('.' + command, '').trim();
    let isBotOwner = message.author.id == 'your_user_id';
  
    switch (command) {
      case 'restart': {
        if (!isBotOwner)
          return;
  
        message.channel.send('Restarting...').then(m => {
          client.destroy().then(() => {
            client.login('token');
          });
        });
        break;
      }
  
  
      case 'shutdown': {
        if (!isBotOwner)
          return;
  
        message.channel.send('Shutting down...').then(m => {
          client.destroy();
        });
        break;
      }
    }
  });
  //E