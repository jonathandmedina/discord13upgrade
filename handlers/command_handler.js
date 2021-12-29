const fs = require("fs");


module.exports = (bot, Discord) => {

    //  READ COMMANDS FOLDER
    fs.readdir("./commands/", (err, files) => {
        if (err) console.log(err);

        // FILTER OUT .JS FILES

        let jsfile = files.filter(f => f.split(".").pop() === "js")
        if (jsfile.length <= 0) {
            console.log("Couldnt find any commands.");
            return;
        }

        jsfile.forEach((f) => {
            let props = require(`../commands/${f}`);
            console.log(`${f} loaded!`);
            bot.commands.set(props.help.name, props);

            props.help.aliases.forEach(alias => {
                bot.aliases.set(alias, props.help.name);
            })
        })
        
    })


}