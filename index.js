const Discord = require('discord.js');
const botconfig = require("./botconfig.json");
const fs = require("fs");
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { Client, Intents, Collection } = require('discord.js'); //DISCORD CLASSES
require('dotenv').config();

// CREATING THE BOT
const bot = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
    ]
});


bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.events = new Discord.Collection();


// THIS LOADS THE HANDLERS INCLUDING COMMANDS AND EVENTS IN THE "HANDLERS" FOLDER
['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(bot, Discord);
})

bot.login(process.env.token);
