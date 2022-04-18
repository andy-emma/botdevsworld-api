module.exports = ({
name: "unlock",
code: `
$modifyChannelPerms[$guildID;$channelID;+sendmessage]
$description[1;$customEmoji[yes] **El canal** <#$channelID> **a sido desbloqueado**
**Administrador encargado:** <@$authorID>
**Desbloqueo:** <t:$truncate[$divide[$dateStamp;1000]]:F> **(**<t:$truncate[$divide[$dateStamp;1000]]:R>**)**]
$textSplit[$replaceText[$replaceText[$checkCondition[$mentionedChannels[1]==];true;$channelID];false;$mentionedChannels[1]];/]
$onlyBotPerms[managechannel;{newEmbed:{title:Error}{description: **No cuento con suficientes permisos para llevar a cabo esta acción.**}{color:fc2121}}]
$onlyPerms[managechannel;{newEmbed:{title:Error}{description:**No cuentas con suficientes permisos para llevar a cabo esta acción.**}{color:fc2121}}]
$color[1;$getVar[color]]$footer[1;$getVar[footer]]`
})