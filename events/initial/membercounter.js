
module.exports = async (bot, Discord) => {
    // const guild = bot.guilds.cache.get("419253956385177631")

    const channelId = '419253956385177631'

    const updateMembers = guild => {
        const channel = guild.channels.cache.get(channelId)
        channel.setName(`Population: ${memberCount.toLocaleString()}`)
    }

    //bot.on('guildMemberAdd', (member) => updateMembers(member.guild))
    //bot.on('guildMemberRemove', (member) => updateMembers(member.guild))

    const guild = bot.guilds.cache.get("419253956385177631")
    updateMembers(guild)

    // setInterval(() =>{


    //     const memberCount = guild.memberCount;
    //     const channel = guild.channels.cache.get('855826913931427861');
    //     channel.setName(`Population: ${memberCount.toLocaleString()}`);
    //     console.log('Updating Member Count');
    // }, 5000);
}