const botconfig = require("./botconfig.json");
const Discord = require("Discord.js");

const bot = new Discord.Client({disableEveryone: true});

sRegion = 'eu-central';
senpai = 'RebelFinatic';
helptitle = 'Below is a list of commands and descriptions on what the bot can do.';
commands = '*stats - Shows server statistics.\                                                                                                  *botinfo - Shows information on SumireDesu Bot. \                 *serverinfo - Shows information about the server.       \             *livechart - Shows our top picks from livechart.me        \       *animesugg - Get an anime recommendation from SumireDesu Bot.';
omsg = 'Found a pesky issue with the bot? \ No worries message RebelFinatic#5371';

/*
'https://myanimelist.cdn-dena.com/images/anime/1031/90444.jpg',
'https://myanimelist.cdn-dena.com/images/anime/1290/91195.jpg',
'https://myanimelist.cdn-dena.com/images/anime/1427/91055.jpg',
'https://myanimelist.cdn-dena.com/images/anime/1319/92084.jpg',
'https://myanimelist.cdn-dena.com/images/anime/1614/90408.jpg',
'https://myanimelist.cdn-dena.com/images/anime/1812/90955.jpg',
'https://myanimelist.cdn-dena.com/images/anime/1943/91370.jpg'
*/
const animesugg_imgs = [
  megalobox = 'https://myanimelist.cdn-dena.com/images/anime/1427/91055.jpg';
]

const hug_imgs = [
'https://media.giphy.com/media/CZpro4AZHs436/giphy.gif',
'https://media.giphy.com/media/CZpro4AZHs436/giphy2.gif',
'https://media.giphy.com/media/CZpro4AZHs436/giphy3.gif',
]

//Enabling the bot
bot.on("ready", async => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("a crap ton of Anime! | Terminal X's own anime bot, To find out more on commands type *help", {type: "WATCHING"});
});

bot.on("message", message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `${prefix}serverinfo`) {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#551A8B")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Weebs", message.guild.memberCount);
    return message.channel.send(serverembed);
  }
  if (cmd === `${prefix}animesugg`) {
    let asembed = new Discord.RichEmbed()
    .setColor("#551A8B")
    .addField("Try Out:", "Anime:        \                    Genre:")
    message.channel.send(asembed)
    message.channel.send('', {
    file: animesugg_imgs[Math.floor(Math.random() * animesugg_imgs.length)]

  });
}

  if (cmd === `${prefix}slap`) {
    message.channel.send('', {
      file: slap_imgs[Math.floor(Math.random() * slap_imgs.lenght)]
    }
  }
  if (cmd === `${prefix}hug`) {
    message.channel.send('', {
    file: hug_imgs[Math.floor(Math.random() * hug_imgs.length)]
});
}
  /*
var msg = message.content;

if (msg === `${prefix}hug`) {
    message.channel.send('', {
        files: [
            "./hug.gif"
        ]
    });
}
*/
  if (animesugg_imgs === megalobox) {

  }
  //Autoreply
  if (message.content === 'hi') {
    //replying back
    return message.channel.send("Hi there how are you today " + message.member);
  }
  else if (message.content === 'hello') {
    return message.channel.send("Hello there", message.member);
  }

  if (cmd === `${prefix}help`) {
    let bicon2 = bot.user.displayAvatarURL;
    let helpembed = new Discord.RichEmbed()
    .setColor("#551A8B")
    .setThumbnail(bicon2)
    .addField("Help Section", helptitle)
    .addField("Commands", commands)
    .addField("Contact the owner", omsg)

    return message.channel.send(helpembed);
  }
//Member count embed command
  if (cmd === `${prefix}stats`) {
    let tembed = new Discord.RichEmbed()
    .setColor("#551A8B")
    .addField("Number of weebs", message.guild.memberCount)
    .addField("Region", sRegion)
    .addField("Your ping", bot.ping)

    return message.channel.send(tembed);
  }

  if (cmd === `${prefix}tc`) {
    if (!args.length) {
      message.channel.send("You didnt specify any arugments " + message.author)
      message.channel.Send("Please type: .help help")
      message.channel.send("To receive commands and usage");

    }
    //Sub command
    else if (args[0] === `foo`) {
      return message.channel.send("THERE WE GO!");
    }
  }

  if (cmd === `${prefix}livechart`) {
    let bicon3 = bot.user.displayAvatarURL;
    let aembed = new Discord.RichEmbed()
    .setColor("#00ff38")
    .setThumbnail(bicon3)
    .addField("Anime List", "Taken from livechart.me (Our top picks)")
    .addField("Current Season", "[-] Boku No Hero Academia        \        [-] Highschool DxD Hero        \       [-] Shingeki no Kyojin Season 3         \ [-] Steins;Gate 0")

    return message.channel.send(aembed);

  }
  //botinfo
  if (cmd === `${prefix}botinfo`) {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#551A8B")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt)
    .addField("Created by Senpai", senpai);

    return message.channel.send(botembed);
  }
});
// Loading the token from botconfig.json
bot.login(botconfig.token);
