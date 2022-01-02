// const Discord = require("discord.js");
// const botconfig = require("../botconfig.json");
// const colors = require("../colors.json");
// require("../functions/dbconnect.js"); // MONGO DB CONNECTION

//  MODELS
const User = require("../models/users.js");

//  DATE AND TIME FOR TRANSACTION FUNCTION
let date = new Date(); // for now
date.getHours(); // => 9
date.getMinutes(); // =>  30
date.getSeconds(); // => 51

let currentMonth = date.getMonth();


module.exports.run = async (bot, message, args) => {

    // DELETE MESSAGE
    message.delete();

    if (args[0]) {
        return message.reply("I'm sorry, you can only see your own balance.")
    };

    var user = message.author;

    //  SEARCH FOR THE USER'S ID

    User.findOne({
        userID: user.id
    }, (err, data) => {
        if (err) console.log(err);

        //  IF THERE'S NO USER, CREATE ONE
        if (!data) {
            const newUser = new User({
                name: bot.users.cache.get(user.id).username,
                userID: user.id,
                lb: "all",
                money: 0,
                weekly: 0,
                claim_t: 1,
                claim_a: 1,
                claim_s: 1,
                claim_w: 1,
                claim_ar: 1,
                claim_p: currentMonth,
                claim_b: currentMonth,
                claim_tw: currentMonth,

            })

            // SAVE THE NEW USER
            newUser.save().catch(err => console.log(err));

            //  SEND THE NEW USER AN EMBED
            let balancemsg = new Discord.MessageEmbed();
            balancemsg.setTitle(`Your ${botconfig.currencyname} Balance.`);
            balancemsg.setDescription(`You have 0 ${botconfig.currencyname} in your account.`);
            balancemsg.setColor(colors.dosh);
            balancemsg.setThumbnail(botconfig.thumbdosh);
            return message.author.send(balancemsg);

        } else {

            //  SEND THE EXISTING USER AN EMBED
            let balancemsg = new Discord.MessageEmbed();
            balancemsg.setTitle(`Your ${botconfig.currencyname} Balance.`);
            balancemsg.setDescription(`You have ${data.money} ${botconfig.currencyname} in your account.`);
            balancemsg.setColor(colors.dosh);
            balancemsg.setThumbnail(botconfig.thumbdosh);
            return message.author.send(balancemsg);
        }
    })

}
module.exports.help = {
    name: "balance",
    aliases: ["bal", "money"]
}