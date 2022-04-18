module.exports = {
  name: "oktest",
  code: `$djsEval[(async () => {
const { MessageEmbed } = require('discord.js');
    const charactersPerMessage = 4000;
    const servers = '▫️' + client.guilds.cache.map(x => x.name).join("\n▫️");
    const numberOfMessages = Math.ceil(servers.length / charactersPerMessage);
    const embed = new MessageEmbed().setAuthor('Servers List of $userTag[$clientID]','$userAvatar[$clientID]','https://dsc.gg/champion-bot').setColor('$userRoleColor[$clientID]').setThumbnail('$userAvatar[$clientID]').setTitle('Total Servers: $serverCount').setFooter('Requested by: $username[$authorID]','$authorAvatar')
    for (i = 0; i < numberOfMessages; i++) {
embed.setDescription(
     servers.slice(i * charactersPerMessage, (i + 1) * charactersPerMessage)
    )
    message.channel.send({ embeds: [embed] });
  } 
}) ();]`
}