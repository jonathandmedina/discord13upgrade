const { Discord,
    Message,
    MessageActionRow,
    MessageButton } = require("discord.js");
const botconfig = require("../../botconfig.json");
const colors = require("../../colors.json");
const fs = require("fs");
const claimFunctions = require("../../functions/claimFunctions")

module.exports = async (Discord, bot, oldMember, newMember) => {

    // DEFINING CHANNELS FOR EMBEDS
    const boostingChannel = botconfig.boostchannel;
    const townsfolkLounge = botconfig.townsfolklounge;
    const allyLounge = botconfig.allylounge;
    const shamanLounge = botconfig.shamanlounge;
    const wizardLounge = botconfig.wizardlounge;
    const archonLounge = botconfig.archonlounge;
    const doshbotChannel = botconfig.doshbotchannel;
    const hypeChannel = botconfig.hypechannel;


    if (oldMember.roles.cache.size !== newMember.roles.cache.size) {

        // NEW TOWNSFOLK EVENT
        if (!oldMember.roles.cache.has(`${botconfig.townsfolkrole}`) && newMember.roles.cache.has(`${botconfig.townsfolkrole}`)) {

            await claimFunctions.townsfolkreward(newMember.id, newMember.user.username);

            //  EMBED FOR NOTIFICATION
            let depositmsg = new Discord.MessageEmbed();
            depositmsg.setTitle(`Welcome to Townsfolk ${newMember.user.username}!`);
            depositmsg.setDescription(`Congratulations ${newMember}. You can now post in this channel. Also, as a reward for becoming a **Townsfolk**, I've deposited **50** ${botconfig.currencyname} into your account.`);
            depositmsg.setColor(colors.discord);
            // depositmsg.setThumbnail(botconfig.thumbdosh);
            depositmsg.setImage(botconfig.congratsDiscordImg);

            const row = new MessageActionRow().addComponents(
                new MessageButton()
                    .setCustomID("whatIsDosh")
                    .setLabel("Primary")
                    .setStyle("PRIMARY")

            );

            bot.channels.cache.get(townsfolkLounge).send({ content: depositmsg, components: [row] })

        }

        // NEW ALLY EVENT
        if (!oldMember.roles.cache.has(`${botconfig.allyrole}`) && newMember.roles.cache.has(`${botconfig.allyrole}`)) {

            await claimFunctions.allyreward(newMember.id, newMember.user.username);

            //  EMBED FOR NOTIFICATION
            let depositmsg = new Discord.MessageEmbed();
            depositmsg.setTitle(`Welcome to Ally ${newMember.user.username}!`);
            depositmsg.setDescription(`Congratulations ${newMember}. You can now post in this channel. Also, as a reward for becoming an **Ally**, I've deposited **100** ${botconfig.currencyname} into your account.`);
            depositmsg.setColor(colors.discord);
            // depositmsg.setThumbnail(botconfig.thumbdosh);
            depositmsg.setImage(botconfig.congratsDiscordImg);

            bot.channels.cache.get(allyLounge).send(depositmsg)
        }

        // NEW SHAMAN EVENT
        if (!oldMember.roles.cache.has(`${botconfig.shamanrole}`) && newMember.roles.cache.has(`${botconfig.shamanrole}`)) {

            await claimFunctions.shamanreward(newMember.id, newMember.user.username);

            //  EMBED FOR NOTIFICATION
            let depositmsg = new Discord.MessageEmbed();
            depositmsg.setTitle(`Welcome to Shaman ${newMember.user.username}!`);
            depositmsg.setDescription(`Congratulations ${newMember}. You can now post in this channel. Also, as a reward for becoming a **Shaman**, I've deposited **200** ${botconfig.currencyname} into your account.`);
            depositmsg.setColor(colors.discord);
            // depositmsg.setThumbnail(botconfig.thumbdosh);
            depositmsg.setImage(botconfig.congratsDiscordImg);

            bot.channels.cache.get(shamanLounge).send(depositmsg)
        }

        // NEW WIZARD EVENT
        if (!oldMember.roles.cache.has(`${botconfig.wizardrole}`) && newMember.roles.cache.has(`${botconfig.wizardrole}`)) {

            await claimFunctions.wizardreward(newMember.id, newMember.user.username);

            //  EMBED FOR NOTIFICATION
            let depositmsg = new Discord.MessageEmbed();
            depositmsg.setTitle(`Welcome to Wizard ${newMember.user.username}!`);
            depositmsg.setDescription(`Congratulations ${newMember}. You can now post in this channel. Also, as a reward for becoming a **Wizard**, I've deposited **300** ${botconfig.currencyname} into your account.`);
            depositmsg.setColor(colors.discord);
            // depositmsg.setThumbnail(botconfig.thumbdosh);
            depositmsg.setImage(botconfig.congratsDiscordImg);

            bot.channels.cache.get(wizardLounge).send(depositmsg)
        }

        // NEW ARCHON EVENT
        if (!oldMember.roles.cache.has(`${botconfig.archonrole}`) && newMember.roles.cache.has(`${botconfig.archonrole}`)) {

            await claimFunctions.archonreward(newMember.id, newMember.user.username);

            //  EMBED FOR NOTIFICATION
            let depositmsg = new Discord.MessageEmbed();
            depositmsg.setTitle(`Welcome to Archon ${newMember.user.username}!`);
            depositmsg.setDescription(`Congratulations ${newMember}. You can now post in this channel. Also, as a reward for becoming an **Archon**, I've deposited **500** ${botconfig.currencyname} into your account.`);
            depositmsg.setColor(colors.discord);
            // depositmsg.setThumbnail(botconfig.thumbdosh);
            depositmsg.setImage(botconfig.congratsDiscordImg);

            bot.channels.cache.get(archonLounge).send(depositmsg)
        }

        // NEW PATRON EVENT
        if (!oldMember.roles.cache.has(`${botconfig.patronrole}`) && newMember.roles.cache.has(`${botconfig.patronrole}`)) {

            await claimFunctions.patronreward(newMember.id, newMember.user.username);

            //  EMBED FOR NOTIFICATION
            let depositmsg = new Discord.MessageEmbed();
            depositmsg.setTitle(`${newMember.user.username} - Thank you for your Patron support!`);
            depositmsg.setDescription(`You rock ${newMember}! You now have access to all the Exclusive Channels. Also, as a reward for becoming a **Patron**, I've deposited **50** ${botconfig.currencyname} into your account.`);
            depositmsg.setColor(colors.patreon);
            // depositmsg.setThumbnail(botconfig.thumbdosh);
            depositmsg.setImage(botconfig.congratsPatronImg);

            bot.channels.cache.get(hypeChannel).send(depositmsg)
        }

        // NEW SERVER BOOST EVENT
        if (!oldMember.roles.cache.has(`${botconfig.boosterrole}`) && newMember.roles.cache.has(`${botconfig.boosterrole}`)) {

            await claimFunctions.boosterreward(newMember.id, newMember.user.username);

            //  EMBED FOR NOTIFICATION
            let depositmsg = new Discord.MessageEmbed();
            depositmsg.setTitle(`${newMember.user.username} - Thank you for Boosting our server!`);
            depositmsg.setDescription(`You rock ${newMember}! We currently have **${newMember.guild.premiumSubscriptionCount}** boosts and we are at level **${newMember.guild.premiumTier}**). As a reward for **Boosting**, I've deposited **100** ${botconfig.currencyname} into your account.`);
            depositmsg.setColor(colors.booster);
            // depositmsg.setThumbnail(botconfig.thumbdosh);
            depositmsg.setImage(botconfig.congratsBoosterImg);

            bot.channels.cache.get(hypeChannel).send(depositmsg)

        }

        // NEW TWITCH SUB EVENT
        if (!oldMember.roles.cache.has(`${botconfig.twitchrole}`) && newMember.roles.cache.has(`${botconfig.twitchrole}`)) {

            await claimFunctions.twitchreward(newMember.id, newMember.user.username);

            //  EMBED FOR NOTIFICATION
            let depositmsg = new Discord.MessageEmbed();
            depositmsg.setTitle(`${newMember.user.username} - Thank you for Subscribing on Twitch!`);
            depositmsg.setDescription(`You rock ${newMember}! You now have access to all the Exclusive Channels. Also, as a reward for **Subscribing**, I've deposited **50** ${botconfig.currencyname} into your account.`);
            depositmsg.setColor(colors.twitch);
            // depositmsg.setThumbnail(botconfig.thumbdosh);
            depositmsg.setImage(botconfig.congratsTwitchImg);

            bot.channels.cache.get(hypeChannel).send(depositmsg)

        }

    }
}