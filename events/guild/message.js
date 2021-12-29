const fs = require("fs");
const tools = require("../../functions.js");
const botconfig = require("../../botconfig.json");

module.exports = (Discord, bot, message) => {

    //  CHECK CHANNEL TYPE
    if (message.channel.type === "dm")
        return;
    if (message.author.bot)
        return;

    //  SET PREFIX
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if (!prefixes[message.guild.id]) {
        prefixes[message.guild.id] = {
            prefix: botconfig.prefix
        }
    }
    let prefix = prefixes[message.guild.id].prefix;

    //  CHECK PREFIX, DEFINE ARGS $ COMMAND
    if (!message.content.startsWith(prefix))
        return;

    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd;
    cmd = args.shift().toLowerCase();
    let command;
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if (commandfile)
        commandfile.run(bot, message, args, tools);

    //  RUN COMMANDS
    if (bot.commands.has(cmd)) {
        command = bot.commands.get(cmd);
    } else if (bot.aliases.has(cmd)) {
        command = bot.commands.get(bot.aliases.get(cmd));
    }
    try {
        command.run(bot, message, args, tools);
    }

    catch (e) {
        return;
    }

}