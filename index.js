const Discord = require('discord.js');
const botconfig = require("./botconfig.json");
const fs = require("fs");
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { Client, Intents, Collection } = require('discord.js'); //DISCORD CLASSES
require('dotenv').config();
// REMOVED REQUIRES
// require("discord-buttons")(bot);

// CREATING THE BOT
const bot = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
    ]
});
// const bot = new Discord.Client({ disableEveryone: true});

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.events = new Discord.Collection();
// bot.slashCommands = new Collection();

// THIS LOADS THE HANDLERS INCLUDING COMMANDS AND EVENTS IN THE "HANDLERS" FOLDER
['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(bot, Discord);
})

// for (const file of slashCommandFiles) {
//     const sCommand = require(`./commands/slash_commands/${file}`);
//     slashCommands.push(sCommand.data.toJSON());
//     bot.slashCommands.set(sCommand.data.name, sCommand);
// }

// bot.once("ready", () => {
//     console.log("Once...")

//     const CLIENT_ID = bot.user.id;

//     const rest = new REST({
//         version: "9"
//     }).setToken(process.env.token);

//         (async () => {
//             try {
//                 if (process.env.ENV === "production") {
//                     await rest.put(Routes.applicationCommands(CLIENT_ID), {
//                         body: slashCommands
//                     });
//                     console.log("Registered Global Commands.");
//                 } else {
//                     await rest.put(Routes.applicationGuildCommands(CLIENT_ID, botconfig.devguild), {
//                         body: slashCommands
//                     });
//                     console.log("Registered Local Commands.")
//                 }

//             } catch (err) {
//                 console.error(err);
//             }
//         })();

// });

bot.login(process.env.token);
