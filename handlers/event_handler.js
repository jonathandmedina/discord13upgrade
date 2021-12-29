const fs = require("fs");

module.exports = (bot, Discord) => {

    //  VARIABLES FOR AUTO-TIMED POST FOR THE ECONOMY COMMAND
    module.exports.timedCheck = undefined;
    module.exports.val = 0;

    const load_dir = (dirs) => {
        const event_files = fs.readdirSync(`./events/${dirs}`).filter(file => file.endsWith('.js'));

        for (const file of event_files) {
            const event = require(`../events/${dirs}/${file}`);
            const event_name = file.split('.')[0];

            // THIS LOADS THE "BOT.ON" OR "CLIENT.ON" BASED ON THE FILE NAMES OF THE EVENTS
            bot.on(event_name, event.bind(null, Discord, bot))
        }
    }

    ['initial', 'guild'].forEach(e => load_dir(e));



}