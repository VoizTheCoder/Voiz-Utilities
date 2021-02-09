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
    console.log('Ready');
	client.user.setActivity(`${client.guilds.cache.size} Servers!`, {type:'WATCHING'}); 
}); 
