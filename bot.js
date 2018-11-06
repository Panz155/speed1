var ServerID = "505715759402582016";// اي دي السيرفر الفيه البوت
var ChannelID = "507890563878617102"; // اي دي الروم التبيه يعمل فيه سبام

const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';

client.on('warn', console.warn);

client.on('error', console.error);



client.on('ready', () => console.log('ProBot Credits Miner Discord.js Script'));

client.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

client.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));


function timerFunc() {
    client.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7))


    });
}

client.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;



  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);



let args = message.content.split(" ").slice(1);

if(!args) return message.channel.send('${prefix}say <words>');    



if (command == "say") {

if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply("*لا تملك الصلاحيات المطلوبه**");



message.channel.send(args.join("  "))

    message.delete();

  }

});
client.on('message', message => {
     if (message.content === "!av-set") {
client.user.setAvatar(`https://cdn.discordapp.com/avatars/507167400836202506/d8459fa53dc9b1b9c4607aafc9c5127b.jpg?size=128`)
 
}
});

var timer = setTimeout(timerFunc, 1000);

client.login(process.env.BOT_TOKEN); 
