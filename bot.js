const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
      msg.reply('pong');
    }
  });

  client.on('message', msg => {
    if (msg.content === 'pong') {
      msg.reply('ping');
    }
  });

  client.on('message', msg => {
    if (msg.content === '!musik') {
      msg.reply('For at bruge musikbotten Groovy, skal du blot skrive skrive ```-play *link-til-sange*```');
    }
  });

  client.on('message', msg => {
    if (msg.content === 'nej') {
      msg.reply('joh');
    }
  });

client.login(auth.token);