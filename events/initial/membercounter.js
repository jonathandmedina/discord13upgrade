
module.exports = async (bot, Discord) => {

    const channelId = '419253956385177631'

    const updateMembers = guild => {
        const channel = guild.channels.cache.get(channelId)
        channel.setName(`Population: ${memberCount.toLocaleString()}`)
    }


    const guild = bot.guilds.cache.get("419253956385177631")
    updateMembers(guild)


}