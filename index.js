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

if(cmd === 'kick'){
    if(!msg.member.hasPermission('KICK_MEMBERS')) return msg.channel.send("You don't have permission to kick members.");
    let toKick = msg.mentions.members.first();
    let reason = args.slice(1).join(" ");
    if(!args[0]) return msg.channel.send('Please mention someone to kick');
    if(!toKick) return msg.channel.send(`${args[0]} is not a member.`);
    if(!reason) return msg.channel.send('Specify a reason.');

    if(!toKick.kickable){
        return msg.channel.send(':x: I cannot kick someone that is mod/admin. :x:');
    }

    if(toKick.kickable){
        let x = new Discord.MessageEmbed()
        .setTitle('Kick')
        .addField('Member Kicked', toKick)
        .addField('Kicked by', msg.author)
        .addField('Reason', reason)
        .addField('Date', msg.createdAt)
        .setColor(r);

        msg.channel.send(x);
        toKick.kick();
    }
}